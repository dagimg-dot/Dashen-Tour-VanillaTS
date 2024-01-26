type IconProps = {
  isActive?: boolean;
  activeIcon?: string;
  style?: string;
};

const DashBoardIcon = ({ isActive, activeIcon }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      width={32}
      class={isActive ? activeIcon : "stroke-white"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
      ''
    </svg>
  );
};

const DestinationIcon = ({ isActive, activeIcon }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      width={32}
      class={isActive ? activeIcon : "stroke-white"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
      />
    </svg>
  );
};

const PackageIcon = ({ isActive, activeIcon }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      width={32}
      class={isActive ? activeIcon : "stroke-white"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />
    </svg>
  );
};

const MessageIcon = ({ isActive, activeIcon }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      width={32}
      class={isActive ? activeIcon : "stroke-white"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      />
    </svg>
  );
};

const AdminIcon = ({ isActive, activeIcon }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={32}
      stroke-width={2}
      fill="none"
      class={isActive ? activeIcon : "stroke-white"}
    >
      <g>
        <path d="M23.999,22.863c-10.014,0-18.131,8.119-18.131,18.133v1.727v3.34v1.906h36.264v-1.906v-2.189v-2.877   C42.132,30.982,34.013,22.863,23.999,22.863z" />
        <path d="M14.479,15.936l1.859-0.656c0.502,0.837,1.148,1.593,1.916,2.236l-0.898,1.877l4.033,1.928l0.896-1.877   c0.963,0.189,1.933,0.22,2.88,0.095l0.682,1.934l3.371-1.191l-0.674-1.904c0.864-0.507,1.636-1.168,2.298-1.957l1.875,0.897   l1.923-4.02L32.763,12.4c0.195-0.986,0.225-1.983,0.09-2.951l1.858-0.655l-1.19-3.371l-1.859,0.655   c-0.499-0.834-1.144-1.587-1.907-2.229l0.898-1.879l-4.051-1.938l-0.898,1.881c-1.001-0.195-2.016-0.224-2.997-0.079l-0.63-1.785   l-3.373,1.191l0.641,1.815c-0.812,0.493-1.548,1.124-2.176,1.872l-1.879-0.898l-1.935,4.046l1.88,0.898   c-0.193,0.98-0.221,1.972-0.086,2.936l-1.859,0.655L14.479,15.936z M24,7.562c1.657,0,3,1.343,3,3s-1.343,3-3,3   c-1.657,0-3-1.343-3-3S22.343,7.562,24,7.562z" />
      </g>
    </svg>
  );
};

const UploadIcon = ({ isActive, activeIcon }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      width={32}
      class={isActive ? activeIcon : "stroke-main"}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
      />
    </svg>
  );
};

const CompanyLogoIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 83 90"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 59.1815C0 51.8507 1.3356 45.8768 4.00681 41.2598C8.64432 33.1184 15.1183 29.0477 23.4287 29.0477C28.2517 29.0477 32.3698 30.898 35.783 34.5987V11.0732L46.3565 6.31522H46.913V59.1815C46.913 66.5122 45.5774 72.4861 42.9062 77.1031C38.1945 85.2445 31.702 89.3152 23.4287 89.3152C15.2667 89.3152 8.79272 85.2445 4.00681 77.1031C1.3356 72.5566 0 66.5827 0 59.1815ZM11.13 59.1815C11.13 65.8074 11.8906 70.5301 13.4117 73.3496C15.9345 78.0018 19.2735 80.328 23.4287 80.328C27.621 80.328 30.96 78.0018 33.4457 73.3496C35.0039 70.4243 35.783 65.7016 35.783 59.1815C35.783 52.6613 35.0039 47.9386 33.4457 45.0133C30.9971 40.3963 27.6581 38.0878 23.4287 38.0878C19.1993 38.0878 15.8603 40.4316 13.4117 45.119C11.8906 48.0443 11.13 52.7318 11.13 59.1815Z"
        fill="white"
        fill-opacity="1"
      />
      <path
        d="M57.1913 83V32.3648L46.913 37V28.5L57.1913 23.4906V4.69811L67.9214 0H68.4861V22.5L81.2421 28.5L83 24.0126L78.5 35.5L68.4861 31V78.3019L57.7561 83H57.1913Z"
        fill="white"
        fill-opacity="1"
      />
    </svg>
  );
};

export {
  DashBoardIcon,
  DestinationIcon,
  CompanyLogoIcon,
  PackageIcon,
  MessageIcon,
  AdminIcon,
  UploadIcon,
};
