import { FaHandPeace, FaOpencart } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";

const stats = [
  {
    Icon: FaOpencart,
    value: "2050+",
    label: "Completed art pieces",
  },
  {
    Icon: FaHandPeace,
    value: "1850+",
    label: "Delivered to clients",
  },
  {
    Icon: GiHumanPyramid,
    value: "1850+",
    label: "Happy clients",
  },
];

const Achievement = () => {
  return (
    <section className="bg-base-100 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--color-primary-brand)]">
            Milestones
          </p>
          <h2 className="mt-2 font-['Mochiy_Pop_One',sans-serif] text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            Achievements
          </h2>
          <p className="mt-4 text-base leading-relaxed text-base-content/75 sm:text-lg">
            A timeless language transcending boundaries—art captures the human
            experience in strokes of brilliance.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {stats.map(({ Icon, value, label }, index) => (
            <li
              key={label}
              className={
                index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none"
                  : undefined
              }
            >
              <article className="group flex h-full flex-col items-center rounded-2xl border border-base-content/10 bg-base-200/40 px-6 py-8 text-center shadow-sm ring-1 ring-transparent transition duration-300 hover:border-[color:var(--color-primary-brand)]/35 hover:bg-base-200/70 hover:ring-[color:var(--color-primary-brand)]/15 sm:px-8 sm:py-10">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-base-100 text-[color:var(--color-primary-brand)] shadow-inner ring-1 ring-base-content/10 transition group-hover:scale-105 sm:h-16 sm:w-16"
                  aria-hidden
                >
                  <Icon className="text-3xl sm:text-4xl" />
                </span>
                <p className="mt-6 tabular-nums text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                  {value}
                </p>
                <p className="mt-2 max-w-[14ch] text-sm font-medium leading-snug text-base-content/70 sm:text-base">
                  {label}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievement;
