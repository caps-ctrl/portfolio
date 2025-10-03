import { SiGithub, SiLinkedin } from "react-icons/si";

export const SocialButtons = () => {
  return (
    <div className="flex gap-4">
      {/* GitHub */}
      <a
        href="https://github.com/caps-ctrl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition"
      >
        <SiGithub size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/marcel-gusiew-269a92382/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] transition"
      >
        <SiLinkedin size={20} />
      </a>
    </div>
  );
};
