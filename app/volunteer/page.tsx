import VolunteerHero from "@/components/volunteer/VolunteerHero";
import VolunteerBenefits from "@/components/volunteer/VolunteerBenefits";
import VolunteerForm from "@/components/volunteer/VolunteerForm";
import VolunteerCTA from "@/components/volunteer/VolunteerCTA";

export default function VolunteerPage() {
  return (
    <>
      <VolunteerHero />
      <VolunteerBenefits />
      <VolunteerForm />
      <VolunteerCTA />
    </>
  );
}