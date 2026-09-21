"use client";

import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useState,
} from "react";

const steps = [
  {
    number: 1,
    title: "Personal details",
    shortTitle: "Personal",
    description: "Tell us who you are and how we can contact you.",
  },
  {
    number: 2,
    title: "Application information",
    shortTitle: "Application",
    description: "Tell us about your interest in this position.",
  },
  {
    number: 3,
    title: "Education & qualifications",
    shortTitle: "Education",
    description: "Provide your relevant education and qualifications.",
  },
  {
    number: 4,
    title: "Experience & skills",
    shortTitle: "Experience",
    description: "Tell us about your relevant experience and skills.",
  },
  {
    number: 5,
    title: "Supporting documents",
    shortTitle: "Documents",
    description: "Upload your CV and any relevant supporting documents.",
  },
  {
    number: 6,
    title: "Additional information",
    shortTitle: "Additional",
    description: "Add anything else that may support your application.",
  },
  {
    number: 7,
    title: "Review & submit",
    shortTitle: "Review",
    description: "Review your application and confirm your declaration.",
  },
];

type ApplicationData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  coverLetter: string;
  education: string;
  qualifications: string;
  experience: string;
  skills: string;
  additionalInformation: string;
  declaration: boolean;
};

const initialData: ApplicationData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  coverLetter: "",
  education: "",
  qualifications: "",
  experience: "",
  skills: "",
  additionalInformation: "",
  declaration: false,
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const acceptedDocumentTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function JobApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] =
    useState<ApplicationData>(initialData);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [supportingFiles, setSupportingFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ApplicationData>(
    field: K,
    value: ApplicationData[K],
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  }

  function handleCvChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      return;
    }

    const validationError = validateFile(file);

    if (validationError) {
      setError(validationError);
      event.target.value = "";
      return;
    }

    setCvFile(file);
    setError("");
  }

  function handleSupportingFilesChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) {
      return;
    }

    if (files.length > 5) {
      setError("You can upload a maximum of 5 supporting documents.");
      event.target.value = "";
      return;
    }

    for (const file of files) {
      const validationError = validateFile(file);

      if (validationError) {
        setError(validationError);
        event.target.value = "";
        return;
      }
    }

    setSupportingFiles(files);
    setError("");
  }

  function validateFile(file: File): string {
    if (file.size > MAX_FILE_SIZE) {
      return `"${file.name}" is larger than the 5 MB file limit.`;
    }

    if (!acceptedDocumentTypes.includes(file.type)) {
      return `"${file.name}" is not a supported document format. Please use PDF, DOC, or DOCX.`;
    }

    return "";
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
      if (!formData.coverLetter.trim()) {
        setError(
          "Please explain briefly why you are interested in this position.",
        );
        return false;
      }
    }

    if (currentStep === 3) {
      if (!formData.education.trim()) {
        setError("Please provide your education background.");
        return false;
      }
    }

    if (currentStep === 4) {
      if (!formData.experience.trim()) {
        setError("Please provide your relevant experience.");
        return false;
      }

      if (!formData.skills.trim()) {
        setError("Please provide your relevant skills.");
        return false;
      }
    }

    if (currentStep === 5) {
      if (!cvFile) {
        setError("Please upload your CV / Resume to continue.");
        return false;
      }
    }

    if (currentStep === 7) {
      if (!formData.declaration) {
        setError(
          "Please confirm the declaration before submitting your application.",
        );
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
    setCurrentStep(1);
    setFormData(initialData);
    setCvFile(null);
    setSupportingFiles([]);
    setError("");
    setSubmitted(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return <ApplicationSubmitted onReset={resetApplication} />;
  }

  const currentStepData = steps[currentStep - 1];
  const progress = (currentStep / steps.length) * 100;

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_38%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-18 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Careers at MercyCare
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Job application
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Complete your application step by step. Your information will
            remain available as you move between the application stages.
          </p>
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
                  disabled={step.number >= currentStep}
                  onClick={() => goToStep(step.number)}
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

          <div className="mt-4 flex gap-2 md:hidden">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`h-1.5 flex-1 rounded-full ${
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
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0B1B3A] text-sm font-bold text-white">
                {String(currentStep).padStart(2, "0")}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                  Step {currentStep}
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0B1B3A] sm:text-3xl">
                  {currentStepData.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
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
                    data={formData}
                    updateField={updateField}
                  />
                )}

                {currentStep === 2 && (
                  <ApplicationInformationStep
                    data={formData}
                    updateField={updateField}
                  />
                )}

                {currentStep === 3 && (
                  <EducationStep
                    data={formData}
                    updateField={updateField}
                  />
                )}

                {currentStep === 4 && (
                  <ExperienceStep
                    data={formData}
                    updateField={updateField}
                  />
                )}

                {currentStep === 5 && (
                  <DocumentsStep
                    cvFile={cvFile}
                    supportingFiles={supportingFiles}
                    onCvChange={handleCvChange}
                    onRemoveCv={() => setCvFile(null)}
                    onSupportingFilesChange={
                      handleSupportingFilesChange
                    }
                    onRemoveSupportingFile={(index) =>
                      setSupportingFiles((previous) =>
                        previous.filter((_, itemIndex) => itemIndex !== index),
                      )
                    }
                  />
                )}

                {currentStep === 6 && (
                  <AdditionalInformationStep
                    data={formData}
                    updateField={updateField}
                  />
                )}

                {currentStep === 7 && (
                  <ReviewStep
                    data={formData}
                    cvFile={cvFile}
                    supportingFiles={supportingFiles}
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

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            This frontend currently demonstrates the application experience.
            Secure submission, document storage, recruitment notifications,
            review, and applicant management will be connected through the
            backend system.
          </p>
        </div>
      </main>
    </>
  );
}

function PersonalDetailsStep({
  data,
  updateField,
}: {
  data: ApplicationData;
  updateField: <K extends keyof ApplicationData>(
    field: K,
    value: ApplicationData[K],
  ) => void;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Full name" required>
        <input
          type="text"
          value={data.fullName}
          onChange={(event) =>
            updateField("fullName", event.target.value)
          }
          className="input-field"
          placeholder="Enter your full name"
        />
      </Field>

      <Field label="Email address" required>
        <input
          type="email"
          value={data.email}
          onChange={(event) =>
            updateField("email", event.target.value)
          }
          className="input-field"
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Phone number" required>
        <input
          type="tel"
          value={data.phone}
          onChange={(event) =>
            updateField("phone", event.target.value)
          }
          className="input-field"
          placeholder="+254..."
        />
      </Field>

      <Field label="Town / area">
        <input
          type="text"
          value={data.location}
          onChange={(event) =>
            updateField("location", event.target.value)
          }
          className="input-field"
          placeholder="e.g. Kisumu, Nairobi"
        />
      </Field>
    </div>
  );
}

function ApplicationInformationStep({
  data,
  updateField,
}: {
  data: ApplicationData;
  updateField: <K extends keyof ApplicationData>(
    field: K,
    value: ApplicationData[K],
  ) => void;
}) {
  return (
    <div className="space-y-7">
      <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-5">
        <p className="text-sm font-semibold text-[#0B1B3A]">
          Your application
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Explain why you are interested in the position and what you believe
          you could contribute.
        </p>
      </div>

      <Field label="Why are you interested in this position?" required>
        <textarea
          value={data.coverLetter}
          onChange={(event) =>
            updateField("coverLetter", event.target.value)
          }
          rows={9}
          className="input-field min-h-52 resize-y"
          placeholder="Tell us why this opportunity interests you, how it relates to your background, and what you could contribute."
        />
      </Field>
    </div>
  );
}

function EducationStep({
  data,
  updateField,
}: {
  data: ApplicationData;
  updateField: <K extends keyof ApplicationData>(
    field: K,
    value: ApplicationData[K],
  ) => void;
}) {
  return (
    <div className="space-y-7">
      <Field label="Education background" required>
        <textarea
          value={data.education}
          onChange={(event) =>
            updateField("education", event.target.value)
          }
          rows={7}
          className="input-field min-h-44 resize-y"
          placeholder="List relevant institutions, courses, degrees, diplomas, certificates, or other education."
        />
      </Field>

      <Field label="Professional qualifications">
        <textarea
          value={data.qualifications}
          onChange={(event) =>
            updateField("qualifications", event.target.value)
          }
          rows={6}
          className="input-field min-h-36 resize-y"
          placeholder="Include relevant professional qualifications, certifications, memberships, or specialised training."
        />
      </Field>

      <p className="text-xs leading-5 text-slate-500">
        Only provide qualifications that are relevant and that you can
        reasonably support with documentation if requested.
      </p>
    </div>
  );
}

function ExperienceStep({
  data,
  updateField,
}: {
  data: ApplicationData;
  updateField: <K extends keyof ApplicationData>(
    field: K,
    value: ApplicationData[K],
  ) => void;
}) {
  return (
    <div className="space-y-7">
      <Field label="Relevant experience" required>
        <textarea
          value={data.experience}
          onChange={(event) =>
            updateField("experience", event.target.value)
          }
          rows={8}
          className="input-field min-h-48 resize-y"
          placeholder="Describe relevant employment, volunteer work, projects, internships, community involvement, or other experience."
        />
      </Field>

      <Field label="Relevant skills" required>
        <textarea
          value={data.skills}
          onChange={(event) =>
            updateField("skills", event.target.value)
          }
          rows={7}
          className="input-field min-h-44 resize-y"
          placeholder="Describe the skills that are relevant to the position."
        />
      </Field>
    </div>
  );
}

function DocumentsStep({
  cvFile,
  supportingFiles,
  onCvChange,
  onRemoveCv,
  onSupportingFilesChange,
  onRemoveSupportingFile,
}: {
  cvFile: File | null;
  supportingFiles: File[];
  onCvChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemoveCv: () => void;
  onSupportingFilesChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  onRemoveSupportingFile: (index: number) => void;
}) {
  return (
    <div className="space-y-7">
      <DocumentUpload
        title="CV / Resume"
        description="Upload your current CV or Resume. This is required for the application."
        required
        file={cvFile}
        onChange={onCvChange}
        onRemove={onRemoveCv}
      />

      <DocumentUpload
        title="Supporting documents"
        description="Add relevant certificates or other documents where the position requires or benefits from them."
        multiple
        files={supportingFiles}
        onChange={onSupportingFilesChange}
        onRemove={(index) => {
          if (index !== undefined) {
            onRemoveSupportingFile(index);
          }
        }}
      />

      <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-5">
        <p className="text-sm font-semibold text-[#0B1B3A]">
          Document handling
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          The completed MercyCare recruitment system should store uploaded
          documents securely and restrict access to authorised recruitment
          workflows.
        </p>
      </div>
    </div>
  );
}

function DocumentUpload({
  title,
  description,
  required = false,
  multiple = false,
  file,
  files = [],
  onChange,
  onRemove,
}: {
  title: string;
  description: string;
  required?: boolean;
  multiple?: boolean;
  file?: File | null;
  files?: File[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemove: (index?: number) => void;
}) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1B3A] text-sm font-bold text-white">
              DOC
            </div>

            <div>
              <h3 className="font-bold text-[#0B1B3A]">
                {title}
                {required ? (
                  <span className="ml-1 text-[#D4AF37]">*</span>
                ) : null}
              </h3>

              <p className="text-xs text-slate-500">
                PDF, DOC or DOCX • Maximum 5 MB per file
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>

        <label className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#0B1B3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#132b57]">
          {multiple ? "Add Documents" : file ? "Change CV" : "Upload CV"}

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            multiple={multiple}
            onChange={onChange}
            className="sr-only"
          />
        </label>
      </div>

      {file ? (
        <FileRow
          file={file}
          onRemove={() => onRemove()}
        />
      ) : !multiple ? (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center">
          <p className="text-sm font-medium text-slate-600">
            No CV uploaded yet
          </p>
        </div>
      ) : null}

      {files.length > 0 ? (
        <div className="mt-5 space-y-2">
          {files.map((item, index) => (
            <FileRow
              key={`${item.name}-${index}`}
              file={item}
              onRemove={() => onRemove(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function FileRow({
  file,
  onRemove,
}: {
  file: File;
  onRemove: () => void;
}) {
  return (
    <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xs font-bold text-emerald-700">
          ✓
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-emerald-900">
            {file.name}
          </p>

          <p className="mt-1 text-xs text-emerald-700">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="shrink-0 text-xs font-semibold text-emerald-800 hover:underline"
      >
        Remove
      </button>
    </div>
  );
}

function AdditionalInformationStep({
  data,
  updateField,
}: {
  data: ApplicationData;
  updateField: <K extends keyof ApplicationData>(
    field: K,
    value: ApplicationData[K],
  ) => void;
}) {
  return (
    <div className="space-y-7">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold text-[#0B1B3A]">
          Additional information
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Use this section for information that has not been covered in the
          earlier stages of your application.
        </p>
      </div>

      <Field label="Additional information">
        <textarea
          value={data.additionalInformation}
          onChange={(event) =>
            updateField(
              "additionalInformation",
              event.target.value,
            )
          }
          rows={9}
          className="input-field min-h-52 resize-y"
          placeholder="Anything else you would like MercyCare to know?"
        />
      </Field>
    </div>
  );
}

function ReviewStep({
  data,
  cvFile,
  supportingFiles,
  onDeclarationChange,
  onEditStep,
}: {
  data: ApplicationData;
  cvFile: File | null;
  supportingFiles: File[];
  onDeclarationChange: (value: boolean) => void;
  onEditStep: (step: number) => void;
}) {
  return (
    <div>
      <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-5">
        <p className="text-sm font-semibold text-[#0B1B3A]">
          Final review
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Review your information before submitting. You can edit any
          completed section.
        </p>
      </div>

      <div className="mt-7 space-y-4">
        <ReviewCard
          number="01"
          title="Personal details"
          onEdit={() => onEditStep(1)}
        >
          <ReviewRow label="Name" value={data.fullName} />
          <ReviewRow label="Email" value={data.email} />
          <ReviewRow label="Phone" value={data.phone} />
          <ReviewRow
            label="Town / area"
            value={data.location || "Not provided"}
          />
        </ReviewCard>

        <ReviewCard
          number="02"
          title="Application information"
          onEdit={() => onEditStep(2)}
        >
          <ReviewRow
            label="Interest"
            value={data.coverLetter}
            multiline
          />
        </ReviewCard>

        <ReviewCard
          number="03"
          title="Education & qualifications"
          onEdit={() => onEditStep(3)}
        >
          <ReviewRow
            label="Education"
            value={data.education}
            multiline
          />
          <ReviewRow
            label="Qualifications"
            value={data.qualifications || "Not provided"}
            multiline
          />
        </ReviewCard>

        <ReviewCard
          number="04"
          title="Experience & skills"
          onEdit={() => onEditStep(4)}
        >
          <ReviewRow
            label="Experience"
            value={data.experience}
            multiline
          />
          <ReviewRow
            label="Skills"
            value={data.skills}
            multiline
          />
        </ReviewCard>

        <ReviewCard
          number="05"
          title="Supporting documents"
          onEdit={() => onEditStep(5)}
        >
          <ReviewRow
            label="CV / Resume"
            value={cvFile?.name ?? "No CV uploaded"}
          />
          <ReviewRow
            label="Other documents"
            value={
              supportingFiles.length
                ? supportingFiles.map((file) => file.name).join(", ")
                : "None uploaded"
            }
          />
        </ReviewCard>

        <ReviewCard
          number="06"
          title="Additional information"
          onEdit={() => onEditStep(6)}
        >
          <ReviewRow
            label="Information"
            value={
              data.additionalInformation || "No additional information"
            }
            multiline
          />
        </ReviewCard>
      </div>

      <div className="mt-7 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={data.declaration}
            onChange={(event) =>
              onDeclarationChange(event.target.checked)
            }
            className="mt-1 h-4 w-4 accent-[#0B1B3A]"
          />

          <span className="text-sm leading-6 text-slate-700">
            I confirm that the information provided in this application is
            accurate to the best of my knowledge. I understand that submitting
            this application does not guarantee shortlisting, interview,
            selection, or employment.
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
            Thank you for applying.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Your application has been completed successfully in this frontend
            demonstration. Once the MercyCare recruitment system is connected,
            applications will be securely submitted, reviewed, and managed
            through the appropriate recruitment workflow.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              What happens next?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              In the completed system, MercyCare will be able to review the
              application, communicate with applicants, and manage recruitment
              stages through the appropriate administrative workflow.
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
