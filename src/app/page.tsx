"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Briefcase, Globe, Lock, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="large"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Features",
          id: "features",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="N°"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "plain",
      }}
      imagePosition="right"
      title="The invisible\nAI marketplace\nfor college\nstudents."
      description="Discover what others are looking for. Trade privately. Connect effortlessly. No public listings. No cold outreach."
      kpis={[
        {
          value: "10K+",
          label: "Students Joined",
        },
        {
          value: "100+",
          label: "AI Tools",
        },
        {
          value: "50+",
          label: "Universities",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Join Waitlist",
          href: "#waitlist",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRtOVjHFVwGvNIDVQiYIOn7jKo/a-sleek-floating-glassmorphism-card-on-a-1774463784314-13e72139.png"
      imageAlt="Glassmorphism card with email input and 'Join Waitlist' button"
      mediaAnimation="entrance-slide"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Nemo"
      title="Empowering Students to Innovate and Thrive"
      description="Nemo is an exclusive AI marketplace designed for college students, providing a private and secure platform to discover, share, and exchange AI-driven projects and solutions. We remove the barriers of public listings and cold outreach, fostering a community of quiet collaboration."
      subdescription="Our mission is to unlock the full potential of student innovation, enabling seamless connections and private transactions within a trusted network. We believe in empowering the next generation of AI leaders."
      icon={Award}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRtOVjHFVwGvNIDVQiYIOn7jKo/diverse-college-students-collaborating-o-1774463786355-d00fa2ee.png"
      imageAlt="College students collaborating on AI projects in a minimalist setting"
      mediaAnimation="entrance-slide"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Lock,
          title: "Invisible Marketplace",
          description: "No public listings. Discover AI projects and solutions privately through intelligent matching, ensuring your innovations remain secure until you choose to share them.",
        },
        {
          icon: Zap,
          title: "Effortless Connections",
          description: "Our AI-powered engine connects you with relevant peers and opportunities without cold outreach. Streamlined communication tools make collaboration simple.",
        },
        {
          icon: Briefcase,
          title: "Private & Secure Trading",
          description: "Exchange AI models, datasets, and algorithms with confidence. Our platform ensures all transactions are private, secure, and compliant with academic integrity.",
        },
        {
          icon: Globe,
          title: "Curated Student Network",
          description: "Access a network of ambitious college students and researchers, fostering an environment where shared knowledge leads to collective growth and innovation.",
        },
      ]}
      title="Core Features That Set Us Apart"
      description="Nemo redefines how college students interact with AI, offering unparalleled privacy, efficiency, and a truly connected experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Chen",
          handle: "@sarah.ai",
          testimonial: "Nemo transformed how I find and collaborate on AI projects. The private matching is a game-changer for my research!",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRtOVjHFVwGvNIDVQiYIOn7jKo/a-professional-minimalist-avatar-of-a-yo-1774463783938-f539eb0d.png",
        },
        {
          id: "2",
          name: "Alex Rodriguez",
          handle: "@alex.dev",
          testimonial: "Finally, a platform where I can confidently share my AI models without fear of public exposure. Nemo is essential for student developers.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRtOVjHFVwGvNIDVQiYIOn7jKo/a-professional-minimalist-avatar-of-a-yo-1774463785313-2ed15c5c.png",
        },
        {
          id: "3",
          name: "Emily White",
          handle: "@emily.data",
          testimonial: "The 'invisible' aspect is brilliant. I've connected with exactly the right people for my data science projects, effortlessly.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRtOVjHFVwGvNIDVQiYIOn7jKo/a-professional-minimalist-avatar-of-a-yo-1774463784868-866ce460.png",
        },
        {
          id: "4",
          name: "David Kim",
          handle: "@dave.ml",
          testimonial: "As an ML enthusiast, finding relevant peers and projects was tough. Nemo made it incredibly simple and secure. Highly recommend!",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRtOVjHFVwGvNIDVQiYIOn7jKo/a-professional-minimalist-avatar-of-a-yo-1774463784326-e7383817.png",
        },
      ]}
      showRating={true}
      title="What Students Are Saying About Nemo"
      description="Hear from the community of innovators who are already leveraging Nemo to advance their AI projects and collaborations."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What is Nemo?",
          content: "Nemo is an exclusive, private AI marketplace specifically designed for college students to discover, share, and exchange AI projects, datasets, and models securely and without public visibility.",
        },
        {
          id: "2",
          title: "How does the 'invisible' aspect work?",
          content: "Unlike traditional marketplaces, Nemo uses intelligent matching algorithms to connect students based on their project needs and offerings. There are no public listings, ensuring privacy and targeted interactions.",
        },
        {
          id: "3",
          title: "Is my data secure?",
          content: "Yes, security and privacy are our top priorities. Nemo employs advanced encryption and access controls to protect all user data and project exchanges.",
        },
        {
          id: "4",
          title: "Who can join Nemo?",
          content: "Nemo is currently open to verified college students. Our onboarding process ensures a trusted and authentic community.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to the most common questions about Nemo, our invisible AI marketplace for college students."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "LinkedIn",
              href: "https://linkedin.com/company/nemo",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/nemo",
            },
            {
              label: "X",
              href: "https://x.com/nemo",
            },
            {
              label: "TikTok",
              href: "https://tiktok.com/@nemo",
            },
          ],
        },
      ]}
      logoText="Nemo"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
