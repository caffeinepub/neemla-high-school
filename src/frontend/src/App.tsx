import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bus,
  Camera,
  CheckCircle2,
  GraduationCap,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Trophy,
  Users,
  Wind,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHY_CHOOSE = [
  {
    icon: Wind,
    title: "Airy & Pollution-Free Campus",
    desc: "Our school is situated in a clean, green village environment away from urban pollution — ideal for focused learning.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: GraduationCap,
    title: "Experienced & Educated Faculty",
    desc: "Our teachers are highly qualified professionals dedicated to nurturing each child's academic and personal growth.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: Bus,
    title: "Transport Facility",
    desc: "Safe and reliable school bus service covering surrounding villages, ensuring every child reaches school comfortably.",
    color: "bg-orange-50 text-orange-700",
  },
  {
    icon: Trophy,
    title: "Highest Merits in Rural Area",
    desc: "Our students consistently top district and state board examinations, setting the benchmark for rural education in Haryana.",
    color: "bg-yellow-50 text-yellow-700",
  },
  {
    icon: Star,
    title: "Top Government Job Placements",
    desc: "Our alumni hold the highest number of government positions in the rural belt — a testament to our quality education.",
    color: "bg-purple-50 text-purple-700",
  },
  {
    icon: Users,
    title: "Extra Co-Curricular Activities",
    desc: "Sports, cultural events, arts, and competitions round out our curriculum, building confidence and character in students.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    desc: "Our campus is fully monitored with CCTV cameras, ensuring a safe and secure environment for all students and staff.",
    color: "bg-slate-50 text-slate-700",
  },
];

const PHOTOS = [
  {
    src: "/assets/uploads/img_1521-019d29f0-f840-71c2-af1a-94a31af880c3-1.jpeg",
    caption: "Students Outing & Group Activity",
    tag: "School Life",
  },
  {
    src: "/assets/uploads/9b5f6b98-090e-4544-9256-91491885d362-019d29f1-0483-74fd-a5e2-9bf228950c30-3.jpeg",
    caption: "Board Exam Result 2025 — 100% Results & Merit List",
    tag: "Academic Excellence",
  },
  {
    src: "/assets/uploads/ed2ff2f7-9e75-4300-98c5-884b80aea5af-019d29fa-19ef-77cd-8c1c-42c65b68b0dc-1.jpeg",
    caption: "Students & Faculty — Academic Achievement",
    tag: "School Life",
  },
  {
    src: "/assets/uploads/c54571cf-0ef8-4172-9a8d-88fe88541e12-019d2a03-6451-765b-a777-4c5852f65e86-2.jpeg",
    caption: "Cultural Programme — Welcome Song",
    tag: "Cultural Event",
  },
  {
    src: "/assets/uploads/490898c1-58e8-46b9-a1f4-4ffd03ecb2f4-019d2a03-6483-72be-b2ae-7545f3c5940b-3.jpeg",
    caption: "Folk Dance Performance — Annual Function",
    tag: "Cultural Event",
  },
  {
    src: "/assets/uploads/794d4743-1e50-413e-b6f8-cde01922f27b-019d2a03-64fe-7615-8500-95217c8e17ed-4.jpeg",
    caption: "Annual Prize Distribution Function",
    tag: "Awards",
  },
  {
    src: "/assets/uploads/8a7a46ee-2ac1-46b8-b3c8-52215e1b5a35-019d2a03-65d5-7242-92c7-03a5d5976aef-5.jpeg",
    caption: "Merit Award Ceremony — Honouring Excellence",
    tag: "Awards",
  },
];

const CLASS_OPTIONS = [
  "Nursery",
  "KG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Enquiry", href: "#enquiry" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    classApplying: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.classApplying || !formData.phone) return;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── TOP BAR ── */}
      <div className="bg-deep-green text-white text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              <a
                href="tel:9813726362"
                className="hover:text-gold transition-colors"
              >
                9813726362
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              Vill. Neemla, Ellenabad, Haryana
            </span>
          </div>
          <div className="font-devanagari text-gold font-semibold text-sm tracking-wide">
            शिक्षा के साथ संस्कार भी
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-50 bg-white border-b border-border shadow-xs"
        data-ocid="header.panel"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-11 h-11 rounded-full bg-deep-green flex items-center justify-center shadow-green">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-xs text-muted-foreground tracking-widest uppercase font-semibold">
                Neemla Education Society
              </p>
              <p className="text-base font-bold text-deep-green font-display">
                Neemla High School
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  i === 0
                    ? "text-deep-green bg-green-tint"
                    : "text-gray-600 hover:text-deep-green hover:bg-green-tint"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#enquiry"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-forest text-white text-sm font-semibold hover:bg-deep-green transition-colors shadow-green"
            data-ocid="nav.primary_button"
          >
            Enquire Now
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm font-medium text-gray-700 hover:text-deep-green"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-lg bg-forest text-white text-sm font-semibold"
                onClick={() => {
                  setMobileOpen(false);
                  window.location.hash = "#enquiry";
                }}
                data-ocid="nav.primary_button"
              >
                Enquire Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── HERO ── */}
        <section
          id="home"
          className="relative min-h-[580px] flex items-center overflow-hidden"
          data-ocid="hero.section"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.24 0.08 259) 0%, oklch(0.35 0.11 152) 60%, oklch(0.47 0.13 152) 100%)",
          }}
        >
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold mb-6 tracking-wide uppercase border border-white/20"
              >
                <Leaf className="w-3.5 h-3.5" />
                Affiliated by HBSE Board, Bhiwani · Permanently Recognised
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-3 font-display"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Neemla High School
              </motion.h1>

              <motion.p
                className="font-devanagari text-2xl sm:text-3xl text-gold font-bold mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                शिक्षा के साथ संस्कार भी
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-2 text-white/80 text-sm mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Vill. Neemla, Ellenabad, Haryana
                </span>
                <span className="hidden sm:inline text-white/40">·</span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  Nursery to Class 10th
                </span>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-gold text-gray-900 font-bold text-sm hover:brightness-105 transition-all shadow-lg"
                  data-ocid="hero.primary_button"
                >
                  Admissions Open 2025–26
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-white/15 text-white font-semibold text-sm border border-white/30 hover:bg-white/25 transition-all"
                  data-ocid="hero.secondary_button"
                >
                  View Gallery
                </a>
              </motion.div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/25 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-center">
              {[
                { num: "100%", label: "Board Results 2025" },
                { num: "Nursery–10", label: "Classes Offered" },
                { num: "HBSE", label: "Affiliated Board" },
                { num: "Rural #1", label: "Merit Rankings" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-gold font-bold text-lg leading-none">
                    {stat.num}
                  </p>
                  <p className="text-white/70 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIDEO GALLERY ── */}
        <section id="videos" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-green font-display mb-3">
                School Highlights
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Watch our annual function and school events.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <video
                src="/assets/uploads/89b9961d-7648-455e-a43b-9e48d0ca5bcb-019d2a03-71f2-75f1-be99-aac11f165844-1.mp4"
                controls
                className="w-full"
                poster="/assets/uploads/c54571cf-0ef8-4172-9a8d-88fe88541e12-019d2a03-6451-765b-a777-4c5852f65e86-2.jpeg"
              >
                <track kind="captions" />
              </video>
            </motion.div>
          </div>
        </section>

        {/* ── PHOTO GALLERY ── */}
        <section id="gallery" className="py-20 bg-green-tint">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-green font-display mb-3">
                School Life & Achievements
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Glimpses from our campus — celebrating academics, culture, and
                student achievements.
              </p>
            </motion.div>

            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              data-ocid="gallery.section"
            >
              {PHOTOS.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  className="group relative overflow-hidden rounded-xl shadow-card bg-white"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block text-xs font-semibold text-forest bg-green-tint px-2 py-0.5 rounded-full mb-2">
                      {photo.tag}
                    </span>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section id="why-us" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-green font-display mb-3">
                Why Choose Neemla High School?
              </h2>
              <p className="font-devanagari text-xl text-forest font-semibold mb-2">
                शिक्षा के साथ संस्कार भी
              </p>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We combine strong academics with character building — preparing
                students for a bright future.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-xl border border-border bg-white hover:shadow-card transition-shadow"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  data-ocid={`why-us.item.${i + 1}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-sm leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENQUIRY SECTION ── */}
        <section
          id="enquiry"
          className="py-20"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.24 0.08 259) 0%, oklch(0.35 0.11 152) 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left info panel */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-display">
                  Admissions Open
                </h2>
                <p className="font-devanagari text-xl text-gold font-bold mb-6">
                  शिक्षा के साथ संस्कार भी
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Enrol your child at Neemla High School — where education meets
                  values. We offer classes from Nursery to Class 10th in a
                  nurturing, disciplined environment.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      icon: GraduationCap,
                      text: "Nursery to Class 10th · HBSE Board",
                    },
                    { icon: MapPin, text: "Vill. Neemla, Ellenabad, Haryana" },
                    { icon: Users, text: "Principal: Sh. Bhagi Ram" },
                    {
                      icon: Phone,
                      text: "9813726362 / 9671868801 / 9671868802",
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-start gap-3 text-white/90 text-sm"
                    >
                      <item.icon className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
                data-ocid="enquiry.panel"
              >
                <h3 className="text-xl font-bold text-deep-green mb-1 font-display">
                  Student Enquiry Form
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  We'll get back to you within 24 hours.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-8 gap-4"
                      data-ocid="enquiry.success_state"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-tint flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-forest" />
                      </div>
                      <div>
                        <h4 className="font-bold text-deep-green text-lg mb-1">
                          Enquiry Submitted!
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Thank you! We will contact you shortly. For immediate
                          assistance, call{" "}
                          <a
                            href="tel:9813726362"
                            className="text-forest font-semibold hover:underline"
                          >
                            9813726362
                          </a>
                          .
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            classApplying: "",
                            phone: "",
                          });
                        }}
                        className="text-sm text-forest underline underline-offset-2 hover:text-deep-green transition-colors"
                      >
                        Submit another enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      data-ocid="enquiry.modal"
                    >
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="student-name"
                          className="text-sm font-semibold text-foreground"
                        >
                          Student Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="student-name"
                          placeholder="Enter student's full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, name: e.target.value }))
                          }
                          required
                          data-ocid="enquiry.input"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-sm font-semibold text-foreground">
                          Class Applying For{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.classApplying}
                          onValueChange={(val) =>
                            setFormData((p) => ({ ...p, classApplying: val }))
                          }
                          required
                        >
                          <SelectTrigger data-ocid="enquiry.select">
                            <SelectValue placeholder="Select a class" />
                          </SelectTrigger>
                          <SelectContent>
                            {CLASS_OPTIONS.map((cls) => (
                              <SelectItem key={cls} value={cls}>
                                {cls}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="parent-phone"
                          className="text-sm font-semibold text-foreground"
                        >
                          Parent's Phone Number{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="parent-phone"
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((p) => ({
                              ...p,
                              phone: e.target.value,
                            }))
                          }
                          required
                          data-ocid="enquiry.input"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-forest hover:bg-deep-green text-white font-bold py-3 rounded-lg transition-colors shadow-green"
                        data-ocid="enquiry.submit_button"
                      >
                        Submit Enquiry
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        For immediate enquiry call:{" "}
                        <a
                          href="tel:9813726362"
                          className="text-forest font-bold hover:underline"
                        >
                          9813726362
                        </a>
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        id="contact"
        className="bg-navy text-white py-14"
        data-ocid="footer.panel"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Col 1 — School Identity */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                    Neemla Education Society
                  </p>
                  <p className="text-base font-bold font-display">
                    Neemla High School
                  </p>
                </div>
              </div>
              <p className="font-devanagari text-gold text-lg font-semibold mb-3">
                शिक्षा के साथ संस्कार भी
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Nurturing young minds with quality education and strong values
                since establishment. Affiliated by HBSE Board, Bhiwani —
                Permanently Recognised.
              </p>
            </div>

            {/* Col 2 — Contact */}
            <div>
              <h3 className="text-sm font-bold mb-5 uppercase tracking-widest text-white/50">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                  <span>Vill. Neemla, Ellenabad, Dist. Sirsa, Haryana</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <a
                      href="tel:9813726362"
                      className="hover:text-white transition-colors"
                    >
                      9813726362
                    </a>
                    <a
                      href="tel:9671868801"
                      className="hover:text-white transition-colors"
                    >
                      9671868801
                    </a>
                    <a
                      href="tel:9671868802"
                      className="hover:text-white transition-colors"
                    >
                      9671868802
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>neemla.highschool@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Col 3 — Info */}
            <div>
              <h3 className="text-sm font-bold mb-5 uppercase tracking-widest text-white/50">
                School Info
              </h3>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li>
                  <span className="text-white/40 text-xs uppercase tracking-wide block mb-0.5">
                    Principal
                  </span>
                  <span className="text-white font-semibold">
                    Sh. Bhagi Ram
                  </span>
                </li>
                <li>
                  <span className="text-white/40 text-xs uppercase tracking-wide block mb-0.5">
                    Affiliation
                  </span>
                  <span>HBSE Board, Bhiwani (Permanently Recognised)</span>
                </li>
                <li>
                  <span className="text-white/40 text-xs uppercase tracking-wide block mb-0.5">
                    Classes
                  </span>
                  <span>Nursery to Class 10th</span>
                </li>
                <li>
                  <span className="text-white/40 text-xs uppercase tracking-wide block mb-0.5">
                    Run By
                  </span>
                  <span>Neemla Education Society</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/40">
              &copy; {currentYear} Neemla High School · Vill. Neemla, Ellenabad,
              Haryana. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Built with <span className="text-red-400">&#9829;</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="text-white/60 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
