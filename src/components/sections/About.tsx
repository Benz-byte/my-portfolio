import Image from "next/image";

const SKILLS = [
  "TypeScript", "React",
  "Next.js",    "Node.js",
  "Tailwind CSS","PostgreSQL",
  "GraphQL",    "Figma",
];

export function About() {
  return (
    <section id="about" className="px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="reveal mb-12 flex items-center gap-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          <span className="font-mono text-base text-primary">01.</span>
          About Me
          <span className="ml-4 hidden h-px flex-1 bg-border sm:block" />
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          {}
          <div className="reveal space-y-4 text-muted-foreground md:col-span-3">
            <p>
  Hi, I'm Ben, a Full Stack Developer based in Iloilo City, Philippines.
  I enjoy building things for the web, from interactive web apps to APIs
  and everything in between. For me, development is about creating
  products that not only look good but also feel smooth, fast, and easy
  to use.
</p>

<p>
  I graduated with honors from{" "}
  <span className="text-foreground">Central Philippine University</span>{" "}
  with a BS in Computer Science in 2027. Since then, I've been working
  across both frontend and backend development, building dashboards,
  e-commerce platforms, and APIs using tools like React, Next.js,
  Node.js, and PostgreSQL. I'm always looking for ways to improve my
  skills and build better digital experiences.
</p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 font-mono text-sm">
              {SKILLS.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="text-primary">▹</span> {s}
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="reveal group relative md:col-span-2">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border-2 border-primary transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 z-10 bg-primary/30 transition-opacity duration-500 group-hover:opacity-0" />
                <Image
                  src="/profile.jpg"
                  alt="Ben Antonio B. Belga"
                  width={768}
                  height={896}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}