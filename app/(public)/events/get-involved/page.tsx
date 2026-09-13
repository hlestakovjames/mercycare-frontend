import GetInvolvedHero from "@/components/events/get-involved/GetInvolvedHero";
import GetInvolvedIntro from "@/components/events/get-involved/GetInvolvedIntro";
import GetInvolvedOptions from "@/components/events/get-involved/GetInvolvedOptions";
import GetInvolvedAttendance from "@/components/events/get-involved/GetInvolvedAttendance";
import GetInvolvedPartnerships from "@/components/events/get-involved/GetInvolvedPartnerships";
import GetInvolvedSupport from "@/components/events/get-involved/GetInvolvedSupport";
import GetInvolvedCTA from "@/components/events/get-involved/GetInvolvedCTA";

export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedHero />
      <GetInvolvedIntro />
      <GetInvolvedOptions />
      <GetInvolvedAttendance />
      <GetInvolvedPartnerships />
      <GetInvolvedSupport />
      <GetInvolvedCTA />
    </>
  );
}
