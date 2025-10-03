export interface Project {
  id: number;
  title: string;
  Photo: string;
  PhotoDark: string;
  link: string;
  description: string;
  technologies: (
    | "React"
    | "TypeScript"
    | "React Router"
    | "Redux Toolkit"
    | "TailwindCSS"
    | "shadcn/ui"
    | "Framer Motion"
    | "Vitest testy jednostkowe"
    | "Zod"
    | "React Hook Form"
    | "local Storage"
    | "FETCH"
  )[];
  GitHub: string;
}

interface ProjectState {
  Projects: Project[];
}

export const projects: ProjectState = {
  Projects: [
    {
      id: 1,
      title: "To Do App",
      Photo: "ToDoApp.png",
      PhotoDark: "ToDoApp.png",

      link: "https://to-do-9b2rdn60i-marcels-projects-c19c1f57.vercel.app/",
      description:
        "Aplikacja To-Do  zarządzana globalnie za pomocą Redux, z interfejsem opartym na komponentach shadcn.",
      technologies: [
        "React",
        "Redux Toolkit",
        "shadcn/ui",
        "TailwindCSS",
        "TypeScript",
      ],
      GitHub: "https://github.com/caps-ctrl/ToDoApp",
    },
    {
      id: 2,
      title: "Quiz-app",
      Photo: "Quizphoto.png",
      PhotoDark: "QuizphotoDark.png",

      link: "https://quizgame-blue.vercel.app/",
      description:
        " Quiz pobierający pytania z API, zapisujący wyniki w localStorage i zarządzany globalnie za pomocą React Context API.",
      technologies: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Vitest testy jednostkowe",
        "FETCH",
        "local Storage",
        "Framer Motion",
        "React Router",
      ],
      GitHub: "https://github.com/caps-ctrl/quizgame",
    },
    {
      id: 3,
      title: "e-comerceShop",
      Photo: "EComerceShop.png",
      PhotoDark: "EComerceShopDark.png",

      link: "https://moje-cv-ecomerceshop.vercel.app/",
      description:
        "Strona e-commerce z możliwością przeglądania produktów z globalnym stanem zarządzanym za pomocą Redux",
      technologies: [
        "React",
        "Redux Toolkit",
        "shadcn/ui",
        "TailwindCSS",
        "TypeScript",
        "Zod",
        "React Hook Form",
        "React Router",
      ],
      GitHub: "https://github.com/caps-ctrl/eComerceShop",
    },
  ],
};
