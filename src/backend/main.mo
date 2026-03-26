import Text "mo:core/Text";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type Event = {
    title : Text;
    date : Time.Time;
    time : Text;
    location : Text;
  };

  module Event {
    public func compare(event1 : Event, event2 : Event) : Order.Order {
      Text.compare(event1.title, event2.title);
    };
  };

  type Announcement = {
    id : Text;
    title : Text;
    description : Text;
    date : Time.Time;
  };

  module Announcement {
    public func compare(announcement1 : Announcement, announcement2 : Announcement) : Order.Order {
      Text.compare(announcement1.id, announcement2.id);
    };
  };

  type SchoolInfo = {
    name : Text;
    address : Text;
    phone : Text;
    email : Text;
    principalName : Text;
  };

  let schoolInfo : SchoolInfo = {
    name = "Neemla High School";
    address = "123 Main St, City, State";
    phone = "123-456-7890";
    email = "info@neemlahs.com";
    principalName = "John Doe";
  };

  let events = Map.empty<Text, Event>();
  let announcements = Map.empty<Text, Announcement>();
  let academicPrograms = Map.empty<Text, Text>();

  public shared ({ caller }) func addEvent(id : Text, title : Text, date : Time.Time, time : Text, location : Text) : async () {
    let event : Event = { title; date; time; location };
    events.add(id, event);
  };

  public shared ({ caller }) func addAnnouncement(id : Text, title : Text, description : Text, date : Time.Time) : async () {
    let announcement : Announcement = { id; title; description; date };
    announcements.add(id, announcement);
  };

  public shared ({ caller }) func addAcademicProgram(programName : Text) : async () {
    academicPrograms.add(programName, programName);
  };

  public query ({ caller }) func getAllEvents() : async [Event] {
    events.values().toArray().sort();
  };

  public query ({ caller }) func getAllAnnouncements() : async [Announcement] {
    announcements.values().toArray().sort();
  };

  public query ({ caller }) func getAcademicPrograms() : async [Text] {
    academicPrograms.values().toArray();
  };

  public query ({ caller }) func getSchoolInfo() : async SchoolInfo {
    schoolInfo;
  };

  public query ({ caller }) func getAnnouncement(id : Text) : async Announcement {
    switch (announcements.get(id)) {
      case (null) { Runtime.trap("Announcement does not exist") };
      case (?announcement) { announcement };
    };
  };

  public query ({ caller }) func getEvent(id : Text) : async Event {
    switch (events.get(id)) {
      case (null) { Runtime.trap("Event does not exist") };
      case (?event) { event };
    };
  };
};
