const team = [
  {
    name: "Amelia Hart",
    role: "Oil painting lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop&q=80",
  },
  {
    name: "Marcus Chen",
    role: "Charcoal & sketch",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&q=80",
  },
  {
    name: "Sofia Reyes",
    role: "Cartoon & illustration",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&q=80",
  },
  {
    name: "James Okonkwo",
    role: "Watercolor specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop&q=80",
  },
  {
    name: "Nina Patel",
    role: "Portrait drawing",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&fit=crop&q=80",
  },
  {
    name: "Daniel Frost",
    role: "Landscape painting",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop&q=80",
  },
];

const OurTeam = () => {
  return (
    <section className="border-t border-base-content/5 bg-base-100 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
            People
          </p>
          <h2 className="mt-2 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            Our team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-base-content/75 sm:text-lg">
            Artists and curators who keep Craft Corner welcoming—from first sketch
            to finished piece on your wall.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {team.map((member) => (
            <li key={member.name}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-base-content/10 bg-base-200/30 p-6 text-center shadow-sm transition duration-300 hover:border-[color:var(--color-primary-brand)]/30 hover:bg-base-200/50 hover:shadow-md sm:p-8">
                <div className="relative shrink-0">
                  <img
                    alt={`${member.name} — team photo`}
                    width={112}
                    height={112}
                    className="h-28 w-28 rounded-full object-cover ring-2 ring-base-100 shadow-md ring-offset-2 ring-offset-base-200/50"
                    src={member.image}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-5 font-['Mochiy_Pop_One',sans-serif] text-lg font-bold text-base-content sm:text-xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-base-content/70">{member.role}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurTeam;
