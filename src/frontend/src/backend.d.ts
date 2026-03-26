import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Announcement {
    id: string;
    title: string;
    date: Time;
    description: string;
}
export interface SchoolInfo {
    name: string;
    email: string;
    address: string;
    principalName: string;
    phone: string;
}
export type Time = bigint;
export interface Event {
    title: string;
    date: Time;
    time: string;
    location: string;
}
export interface backendInterface {
    addAcademicProgram(programName: string): Promise<void>;
    addAnnouncement(id: string, title: string, description: string, date: Time): Promise<void>;
    addEvent(id: string, title: string, date: Time, time: string, location: string): Promise<void>;
    getAcademicPrograms(): Promise<Array<string>>;
    getAllAnnouncements(): Promise<Array<Announcement>>;
    getAllEvents(): Promise<Array<Event>>;
    getAnnouncement(id: string): Promise<Announcement>;
    getEvent(id: string): Promise<Event>;
    getSchoolInfo(): Promise<SchoolInfo>;
}
