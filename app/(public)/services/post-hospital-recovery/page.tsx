import PostHospitalRecoveryHero from "@/components/services/post-hospital-recovery/PostHospitalRecoveryHero";
import PostHospitalRecoveryOverview from "@/components/services/post-hospital-recovery/PostHospitalRecoveryOverview";
import PostHospitalRecoverySupport from "@/components/services/post-hospital-recovery/PostHospitalRecoverySupport";
import PostHospitalRecoveryFamily from "@/components/services/post-hospital-recovery/PostHospitalRecoveryFamily";
import PostHospitalRecoveryProcess from "@/components/services/post-hospital-recovery/PostHospitalRecoveryProcess";
import PostHospitalRecoverySafety from "@/components/services/post-hospital-recovery/PostHospitalRecoverySafety";
import PostHospitalRecoveryCTA from "@/components/services/post-hospital-recovery/PostHospitalRecoveryCTA";

export default function PostHospitalRecoveryPage() {
  return (
    <main>
      <PostHospitalRecoveryHero />
      <PostHospitalRecoveryOverview />
      <PostHospitalRecoverySupport />
      <PostHospitalRecoveryFamily />
      <PostHospitalRecoveryProcess />
      <PostHospitalRecoverySafety />
      <PostHospitalRecoveryCTA />
    </main>
  );
}
