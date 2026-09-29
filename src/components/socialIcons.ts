import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import type { SocialKey } from "@/types";

export const socialIcons: Record<SocialKey, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
};
