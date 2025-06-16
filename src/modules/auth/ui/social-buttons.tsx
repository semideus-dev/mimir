import { FaGithub, FaGoogle } from "react-icons/fa6";
import { GlassButton } from "@/components/ui/glass-button";
import { authClient } from "@/lib/auth-client";

interface Props {
  provider: "google" | "github";
}

export default function SocialButtons() {
  function onSubmit({ provider }: Props) {
    return authClient.signIn.social({
      provider: provider,
      callbackURL: "/dashboard",
    });
  }
  return (
    <div className="flex gap-2">
      <GlassButton
        onClick={() => onSubmit({ provider: "github" })}
        className="w-full"
        variant="subtle"
      >
        <FaGithub />
        Github
      </GlassButton>
      <GlassButton
        onClick={() => onSubmit({ provider: "google" })}
        className="w-full"
        variant="subtle"
      >
        <FaGoogle />
        Google
      </GlassButton>
    </div>
  );
}
