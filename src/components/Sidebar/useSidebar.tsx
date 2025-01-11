import {
  FaAddressCard,
  FaBookOpen,
  FaCertificate,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";

const useSidebar = () => {
  const sidebarItem = [
    {
      key: "summary",
      name: "Summary",
      path: "/dashboard/summary",
      icon: FaNoteSticky,
    },
    {
      key: "portfolios",
      name: "Portfolios",
      path: "/dashboard/portfolios",
      icon: FaAddressCard,
    },
    {
      key: "experiences",
      name: "Experiences",
      path: "/dashboard/experiences",
      icon: FaBookOpen,
    },
    {
      key: "certificates",
      name: "Certificates",
      path: "/dashboard/certificates",
      icon: FaCertificate,
    },
    {
      key: "educations",
      name: "Educations",
      path: "/dashboard/educations",
      icon: FaGraduationCap,
    },
    {
      key: "skills",
      name: "Skills",
      path: "/dashboard/skills",
      icon: FaLaptopCode,
    },
    {
      key: "certificates",
      name: "Certificates",
      path: "/dashboard/certificates",
      icon: FaCertificate,
    },
  ];

  return { sidebarItem };
};

export default useSidebar;
