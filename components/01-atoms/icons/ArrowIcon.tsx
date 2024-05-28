import { SVGProps } from "react";

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-right">
        <path
          id="Vector"
          d="M9.19141 2.61328L10.0586 1.74609C10.4258 1.37891 11.0195 1.37891 11.3828 1.74609L18.9766 9.33594C19.3437 9.70313 19.3437 10.2969 18.9766 10.6602L11.3828 18.2539C11.0156 18.6211 10.4219 18.6211 10.0586 18.2539L9.19141 17.3867C8.82031 17.0156 8.82812 16.4102 9.20703 16.0469L13.9141 11.5625H2.6875C2.16797 11.5625 1.75 11.1445 1.75 10.625V9.375C1.75 8.85547 2.16797 8.4375 2.6875 8.4375H13.9141L9.20703 3.95312C8.82422 3.58984 8.81641 2.98438 9.19141 2.61328Z"
          fill={props.fill ? props.fill : "#FFF"}
        />
      </g>
    </svg>
  );
};
