"use client";

import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useMemo,
  useState,
} from "react";

const volunteerAreas = [
  "Community outreach",
  "Health & wellness activities",
  "Senior support",
  "Family & caregiver support",
  "Awareness & education",
  "Events & activities",
  "Communications & media",
  "Digital & ICT",
  "Administration & support",
];

const availabilityOptions = [
  "Weekdays",
  "Weekends",
  "Occasional events",
  "Flexible",
];

const steps = [
  {
    number: 1,
    title: "Personal details",
    shortTitle: "Personal",
    description: "Tell us who you are and how we can contact you.",
  },
  {
    number: 2,
    title: "Volunteer interests",
    shortTitle: "Interests",
    description: "Choose the areas where you would most like to contribute.",
  },
  {
    number: 3,
    title: "Skills & experience",
    shortTitle: "Experience",
    description: "Tell us about the skills and experience you can bring.",
  },
  {
    number: 4,
    title: "Availability",
    shortTitle: "Availability",
    description: "Help us understand when you may be available.",
  },
  {
    number: 5,
    title: "Motivation",
    shortTitle: "Motivation",
    description: "Tell us why you would like to volunteer with MercyCare.",
  },
  {
    number: 6,
    title: "Documents",
    shortTitle: "Documents",
    description: "Add a CV or other supporting information if applicable.",
  },
  {
    number: 7,
    title: "Review & submit",
    shortTitle: "Review",
    description: "Review your application and confirm your declaration.",
  },
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  volunteerAreas: string[];
  skills: string;
  experience: string;
  availability: string[];
  availabilityNotes: string;
  motivation: string;
  additionalInformation: string;
  declaration: boolean;
};

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  volunteerAreas: [],
  skills: "",
  experience: "",
  availability: [],
  availabilityNotes: "",
  motivation: "",
  additionalInformation: "",
  declaration: false,
};

export default function VolunteerApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const currentStepData = steps[currentStep - 1];

  const progress = useMemo(
    () => (currentStep / steps.length) * 100,
    [currentStep],
  );

  function updateField<K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  }

  function toggleArrayValue(
    field: "volunteerAreas" | "availability",
    value: string,
  ) {
    setFormData((previous) => {
      const currentValues = previous[field];

      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...previous,
        [field]: updatedValues,
      };
    });

    setError("");
  }

  function handleCvChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      setCvFile(null);
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setError("Please select a CV smaller than 5 MB.");
      event.target.value = "";
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload your CV as a PDF, DOC, or DOCX file.");
      event.target.value = "";
      return;
    }

    setCvFile(file);
    setError("");
  }

  function validateCurrentStep(): boolean {
    setError("");

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        setError("Please enter your full name.");
        return false;
      }

      if (!formData.email.trim()) {
        setError("Please enter your email address.");
        return false;
      }

      if (!formData.phone.trim()) {
        setError("Please enter your phone number.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (formData.volunteerAreas.length === 0) {
        setError("Please select at least one volunteer interest.");
        return false;
      }
    }

    if (currentStep === 5) {
      if (!formData.motivation.trim()) {
        setError("Please tell us why you would like to volunteer.");
        return false;
      }
    }

    if (currentStep === 7) {
      if (!formData.declaration) {
        setError("Please confirm the declaration before submitting.");
        return false;
      }
    }

    return true;
  }

  function handleNext() {
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < steps.length) {
      setCurrentStep((previous) => previous + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    setError("");

    if (currentStep > 1) {
      setCurrentStep((previous) => previous - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goToStep(step: number) {
    if (step < currentStep) {
      setError("");
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateCurrentStep()) {
      return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetApplication() {
    setFormData(initialFormData);
    setCvFile(null);
    setCurrentStep(1);
    setSubmitted(false);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return <ApplicationSubmitted onReset={resetApplication} />;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_38%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-18 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Volunteer Application
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Tell us how you would like to contribute.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Complete your application step by step. You can move back and
              forth between completed steps before submitting your application.
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Application progress
              </p>

              <p className="mt-1 text-sm font-bold text-[#0B1B3A]">
                Step {currentStep} of {steps.length}
                <span className="mx-2 text-slate-300">•</span>
                {currentStepData.shortTitle}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-bold text-[#0B1B3A]">
                {Math.round(progress)}%
              </p>
              <p className="text-xs text-slate-500">Complete</p>
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#D4AF37] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4 hidden gap-2 md:flex">
            {steps.map((step) => {
              const isCurrent = step.number === currentStep;
              const isCompleted = step.number < currentStep;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => goToStep(step.number)}
                  disabled={step.number > currentStep}
                  className={`flex flex-1 items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-semibold transition ${
                    isCurrent
                      ? "bg-[#0B1B3A] text-white"
                      : isCompleted
                        ? "bg-[#D4AF37]/10 text-[#0B1B3A] hover:bg-[#D4AF37]/20"
                        : "cursor-not-allowed text-slate-400"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] ${
                      isCurrent
                        ? "bg-[#D4AF37] text-[#0B1B3A]"
                        : isCompleted
                          ? "bg-[#0B1B3A] text-white"
                          : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {isCompleted ? "✓" : step.number}
                  </span>

                  <span className="truncate">{step.shortTitle}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-2 md:hidden">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`h-1.5 flex-1 rounded-full transition ${
                  step.number <= currentStep
                    ? "bg-[#D4AF37]"
                    : "bg-slate-100"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <main className="bg-slate-50 py-10 sm:py-14 lg:py-18">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0B1B3A] text-sm font-bold text-white shadow-sm">
                {String(currentStep).padStart(2, "0")}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                  Step {currentStep}
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0B1B3A] sm:text-3xl">
                  {currentStepData.title}
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  {currentStepData.description}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="p-6 sm:p-8 lg:p-10">
                {currentStep === 1 && (
                  <PersonalDetailsStep
                    formData={formData}
                    updateField={updateField}
                  />
                )}

                {currentStep === 2 && (
                  <VolunteerInterestsStep
                    selected={formData.volunteerAreas}
                    onToggle={(value) =>
                      toggleArrayValue("volunteerAreas", value)
                    }
                  />
                )}

                {currentStep === 3 && (
                  <SkillsExperienceStep
                    formData={formData}
                    updateField={updateField}
                  />
                )}

                {currentStep === 4 && (
                  <AvailabilityStep
                    formData={formData}
                    updateField={updateField}
                    onToggle={(value) =>
                      toggleArrayValue("availability", value)
                    }
                  />
                )}

                {currentStep === 5 && (
                  <MotivationStep
                    motivation={formData.motivation}
                    additionalInformation={formData.additionalInformation}
                    updateField={updateField}
                  />
                )}

                {currentStep === 6 && (
                  <DocumentsStep
                    cvFile={cvFile}
                    additionalInformation={formData.additionalInformation}
                    onCvChange={handleCvChange}
                    onRemoveCv={() => setCvFile(null)}
                    updateField={updateField}
                  />
                )}

                {currentStep === 7 && (
                  <ReviewStep
                    formData={formData}
                    cvFile={cvFile}
                    onDeclarationChange={(value) =>
                      updateField("declaration", value)
                    }
                    onEditStep={goToStep}
                  />
                )}
              </div>

              {error ? (
                <div className="border-t border-red-100 bg-red-50 px-6 py-4 sm:px-8">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                      !
                    </span>

                    <p className="text-sm font-medium leading-6 text-red-700">
                      {error}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                      currentStep === 1
                        ? "cursor-not-allowed text-slate-300"
                        : "text-[#0B1B3A] hover:bg-white"
                    }`}
                  >
                    ← Back
                  </button>

                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center justify-center rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#132b57] hover:shadow-md"
                    >
                      Continue
                      <span className="ml-2">→</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#132b57] hover:shadow-md"
                    >
                      Submit Application
                      <span className="ml-2">✓</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs leading-5 text-slate-500">
              Your information is currently handled by this frontend
              demonstration. Secure submission, file storage, notifications,
              application review, and volunteer management will be connected
              through the backend system.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function PersonalDetailsStep({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Full name" required>
        <input
          required
          type="text"
          value={formData.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          className="input-field"
          placeholder="Enter your full name"
        />
      </Field>

      <Field label="Email address" required>
        <input
          required
          type="email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="input-field"
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Phone number" required>
        <input
          required
          type="tel"
          value={formData.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="input-field"
          placeholder="+254..."
        />
      </Field>

      <Field label="Town / area">
        <input
          type="text"
          value={formData.location}
          onChange={(event) => updateField("location", event.target.value)}
          className="input-field"
          placeholder="e.g. Kisumu, Nairobi"
        />
      </Field>

      <div className="sm:col-span-2 rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-5">
        <p className="text-sm font-semibold text-[#0B1B3A]">
          A quick note
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Your contact details help MercyCare communicate with you about your
          application and relevant volunteer opportunities.
        </p>
      </div>
    </div>
  );
}

function VolunteerInterestsStep({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-sm leading-6 text-slate-600">
        Select all the areas that interest you. You can choose more than one.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {volunteerAreas.map((area) => {
          const isSelected = selected.includes(area);

          return (
            <label
              key={area}
              className={`group flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                isSelected
                  ? "border-[#D4AF37] bg-[#D4AF37]/5"
                  : "border-slate-200 hover:border-[#D4AF37]/60 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(area)}
                className="sr-only"
              />

              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs font-bold transition ${
                  isSelected
                    ? "border-[#0B1B3A] bg-[#0B1B3A] text-white"
                    : "border-slate-300 bg-white text-transparent"
                }`}
              >
                ✓
              </span>

              <span
                className={`text-sm font-medium leading-6 ${
                  isSelected ? "text-[#0B1B3A]" : "text-slate-700"
                }`}
              >
                {area}
              </span>
            </label>
          );
        })}
      </div>

      <p className="mt-5 text-xs text-slate-500">
        {selected.length === 0
          ? "No interests selected yet."
          : `${selected.length} interest${selected.length === 1 ? "" : "s"} selected.`}
      </p>
    </div>
  );
}

function SkillsExperienceStep({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div className="space-y-6">
      <Field label="Skills or areas of expertise">
        <textarea
          value={formData.skills}
          onChange={(event) => updateField("skills", event.target.value)}
          rows={6}
          className="input-field min-h-40 resize-y"
          placeholder="For example: communication, event coordination, photography, ICT, writing, community outreach..."
        />
      </Field>

      <Field label="Previous volunteering or relevant experience">
        <textarea
          value={formData.experience}
          onChange={(event) => updateField("experience", event.target.value)}
          rows={6}
          className="input-field min-h-40 resize-y"
          placeholder="Briefly describe any previous volunteering, work, education, community involvement, or other relevant experience."
        />
      </Field>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold text-[#0B1B3A]">
          No previous experience?
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          That is okay. MercyCare may have opportunities suitable for people
          who are contributing their time, interests, skills, or willingness
          to learn.
        </p>
      </div>
    </div>
  );
}

function AvailabilityStep({
  formData,
  updateField,
  onToggle,
}: {
  formData: FormData;
  updateField: <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => void;
  onToggle: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-sm leading-6 text-slate-600">
        Select the options that best describe when you may be available.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {availabilityOptions.map((option) => {
          const isSelected = formData.availability.includes(option);

          return (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${
                isSelected
                  ? "border-[#D4AF37] bg-[#D4AF37]/5"
                  : "border-slate-200 hover:border-[#D4AF37]/60"
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(option)}
                className="h-4 w-4 accent-[#0B1B3A]"
              />

              <span className="text-sm font-medium text-slate-700">
                {option}
              </span>
            </label>
          );
        })}
      </div>

      <div className="mt-7">
        <Field label="Availability notes">
          <textarea
            value={formData.availabilityNotes}
            onChange={(event) =>
              updateField("availabilityNotes", event.target.value)
            }
            rows={5}
            className="input-field resize-y"
            placeholder="Preferred days, hours, frequency, or other availability information."
          />
        </Field>
      </div>
    </div>
  );
}

function MotivationStep({
  motivation,
  additionalInformation,
  updateField,
}: {
  motivation: string;
  additionalInformation: string;
  updateField: <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div className="space-y-7">
      <div>
        <Field label="Why would you like to volunteer?" required>
          <textarea
            required
            value={motivation}
            onChange={(event) =>
              updateField("motivation", event.target.value)
            }
            rows={8}
            className="input-field min-h-48 resize-y"
            placeholder="Tell us what motivates you to volunteer with MercyCare and what you hope to contribute."
          />
        </Field>

        <p className="mt-2 text-xs text-slate-500">
          A thoughtful response helps us understand your interests and
          expectations.
        </p>
      </div>

      <Field label="Anything else you would like us to know?">
        <textarea
          value={additionalInformation}
          onChange={(event) =>
            updateField("additionalInformation", event.target.value)
          }
          rows={5}
          className="input-field resize-y"
          placeholder="Share any other information that may be relevant to your application."
        />
      </Field>
    </div>
  );
}

function DocumentsStep({
  cvFile,
  additionalInformation,
  onCvChange,
  onRemoveCv,
  updateField,
}: {
  cvFile: File | null;
  additionalInformation: string;
  onCvChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemoveCv: () => void;
  updateField: <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div>
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1B3A] text-lg text-white">
                ↑
              </div>

              <div>
                <h3 className="font-bold text-[#0B1B3A]">
                  CV / Resume
                </h3>

                <p className="text-xs font-medium text-slate-500">
                  Optional unless required for the opportunity
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Upload a current CV if you have one. It can help MercyCare
              understand your skills, education, experience, and areas of
              expertise.
            </p>
          </div>

          <label className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#0B1B3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#132b57]">
            {cvFile ? "Change CV" : "Upload CV"}

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={onCvChange}
              className="sr-only"
            />
          </label>
        </div>

        {cvFile ? (
          <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-sm font-bold text-emerald-700">
                CV
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-emerald-900">
                  {cvFile.name}
                </p>

                <p className="mt-1 text-xs text-emerald-700">
                  {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onRemoveCv}
              className="shrink-0 text-xs font-semibold text-emerald-800 hover:underline"
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center">
            <p className="text-sm font-medium text-slate-600">
              No CV uploaded
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Accepted formats: PDF, DOC, DOCX • Maximum size: 5 MB
            </p>
          </div>
        )}
      </div>

      <div className="mt-7 rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-5">
        <div className="flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1B3A] text-xs font-bold text-white">
            i
          </div>

          <div>
            <p className="text-sm font-semibold text-[#0B1B3A]">
              Document privacy
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              In the completed MercyCare system, uploaded documents will be
              handled through the appropriate application workflow rather than
              being publicly accessible.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <Field label="Additional information">
          <textarea
            value={additionalInformation}
            onChange={(event) =>
              updateField("additionalInformation", event.target.value)
            }
            rows={5}
            className="input-field resize-y"
            placeholder="Anything else you would like MercyCare to know?"
          />
        </Field>
      </div>
    </div>
  );
}

function ReviewStep({
  formData,
  cvFile,
  onDeclarationChange,
  onEditStep,
}: {
  formData: FormData;
  cvFile: File | null;
  onDeclarationChange: (value: boolean) => void;
  onEditStep: (step: number) => void;
}) {
  return (
    <div>
      <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-5">
        <p className="text-sm font-semibold text-[#0B1B3A]">
          Almost there
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Review the information below before submitting your volunteer
          application. You can return to any previous step to make changes.
        </p>
      </div>

      <div className="mt-7 space-y-4">
        <ReviewCard
          number="01"
          title="Personal details"
          onEdit={() => onEditStep(1)}
        >
          <ReviewRow label="Name" value={formData.fullName} />
          <ReviewRow label="Email" value={formData.email} />
          <ReviewRow label="Phone" value={formData.phone} />
          <ReviewRow
            label="Town / area"
            value={formData.location || "Not provided"}
          />
        </ReviewCard>

        <ReviewCard
          number="02"
          title="Volunteer interests"
          onEdit={() => onEditStep(2)}
        >
          <ReviewRow
            label="Selected areas"
            value={formData.volunteerAreas.join(", ")}
          />
        </ReviewCard>

        <ReviewCard
          number="03"
          title="Skills & experience"
          onEdit={() => onEditStep(3)}
        >
          <ReviewRow
            label="Skills"
            value={formData.skills || "Not provided"}
          />
          <ReviewRow
            label="Experience"
            value={formData.experience || "Not provided"}
          />
        </ReviewCard>

        <ReviewCard
          number="04"
          title="Availability"
          onEdit={() => onEditStep(4)}
        >
          <ReviewRow
            label="Availability"
            value={
              formData.availability.length
                ? formData.availability.join(", ")
                : "Not specified"
            }
          />
          <ReviewRow
            label="Notes"
            value={formData.availabilityNotes || "Not provided"}
          />
        </ReviewCard>

        <ReviewCard
          number="05"
          title="Motivation"
          onEdit={() => onEditStep(5)}
        >
          <ReviewRow
            label="Motivation"
            value={formData.motivation}
            multiline
          />
          <ReviewRow
            label="Additional information"
            value={
              formData.additionalInformation || "Not provided"
            }
            multiline
          />
        </ReviewCard>

        <ReviewCard
          number="06"
          title="Documents"
          onEdit={() => onEditStep(6)}
        >
          <ReviewRow
            label="CV / Resume"
            value={cvFile ? cvFile.name : "No CV uploaded"}
          />
        </ReviewCard>
      </div>

      <div className="mt-7 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={formData.declaration}
            onChange={(event) =>
              onDeclarationChange(event.target.checked)
            }
            className="mt-1 h-4 w-4 accent-[#0B1B3A]"
          />

          <span className="text-sm leading-6 text-slate-700">
            I confirm that the information provided in this application is
            accurate to the best of my knowledge, and I understand that
            submitting an application does not automatically guarantee a
            volunteer placement.
          </span>
        </label>
      </div>
    </div>
  );
}

function ReviewCard({
  number,
  title,
  children,
  onEdit,
}: {
  number: string;
  title: string;
  children: ReactNode;
  onEdit: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B1B3A] text-xs font-bold text-white">
            {number}
          </span>

          <h3 className="font-bold text-[#0B1B3A]">{title}</h3>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-semibold text-[#0B1B3A] underline-offset-4 hover:underline"
        >
          Edit
        </button>
      </div>

      <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
        {children}
      </div>
    </div>
  );
}

function ReviewRow({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </span>

      <span
        className={`text-sm leading-6 text-slate-700 ${
          multiline ? "whitespace-pre-wrap" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function ApplicationSubmitted({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1B3A] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_38%)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-2xl font-bold text-[#0B1B3A]">
            ✓
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Application Received
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Thank you for your interest in volunteering.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Your volunteer application has been completed successfully in this
            frontend demonstration. Once the MercyCare application system is
            connected, applications will be securely submitted, reviewed, and
            managed through the appropriate workflow.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-white">
              1
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#0B1B3A]">
              What happens next?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              When the backend workflow is implemented, MercyCare will be able
              to review applications, communicate with applicants, and manage
              volunteer opportunities.
            </p>

            <button
              type="button"
              onClick={onReset}
              className="mt-8 inline-flex rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#132b57]"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-[#0B1B3A]">
        {label}
        {required ? (
          <span className="ml-1 text-[#D4AF37]">*</span>
        ) : null}
      </label>

      {children}
    </div>
  );
}
