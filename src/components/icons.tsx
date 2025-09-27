import type { SVGProps } from 'react';

export function SoftaroLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(79, 172, 254)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(0, 82, 164)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g transform="translate(20, 20) scale(0.85)">
        <path 
          d="M136.4,217.9c-29.8,0-53.9-24.2-53.9-53.9V132c0-29.7,24.2-53.9,53.9-53.9h54c29.8,0,53.9,24.2,53.9,53.9v31.9c0,14.9-12,26.9-26.9,26.9h-81Z"
          fill="#36454F"
        />
        <path 
          d="M136.4,217.9c-29.8,0-53.9-24.2-53.9-53.9V132c0-29.7,24.2-53.9,53.9-53.9h54c29.8,0,53.9,24.2,53.9,53.9v31.9c0,14.9-12,26.9-26.9,26.9h-81Z"
          fill="url(#grad1)"
          transform="translate(0, -140) scale(1, -1) translate(0, 80)"
        />
        <path 
          d="M128,144.4c-14.9,0-26.9-12-26.9-26.9V92.7c0-14.9,12-26.9,26.9-26.9s26.9,12,26.9,26.9v24.8C154.9,132.4,142.9,144.4,128,144.4Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path 
          d="M110,65.8c-12,0-21.8,9.8-21.8,21.8v39.3c0,12,9.8,21.8,21.8,21.8h36c12,0,21.8-9.8,21.8-21.8V87.6c0-12-9.8-21.8-21.8-21.8H110Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M90.3,77.6c0,0,18,6,27.1,19.3s9,32.3,9,32.3"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <circle cx="90.3" cy="77.6" r="6" fill="#FFFFFF" />
        <circle cx="123" cy="116.2" r="6" fill="#FFFFFF" />
        <circle cx="127" cy="132" r="6" fill="#FFFFFF" />

        <rect x="95" y="160" width="60" height="40" fill="#FFFFFF" rx="5" />
        <rect x="100" y="165" width="20" height="5" fill="#36454F" />
        <rect x="100" y="175" width="50" height="5" fill="#36454F" />
        <rect x="100" y="185" width="50" height="5" fill="#36454F" />
        <path d="M135,170 l15,15 l-5,-15 l5,15" stroke="#36454F" strokeWidth="2" fill="none" />

        <rect x="115" y="30" width="25" height="40" fill="#FFFFFF" rx="5" />
        <rect x="117" y="35" width="21" height="30" fill="#36454F" />
        <circle cx="127.5" cy="60" r="3" fill="#FFFFFF" />

        <circle cx="106" cy="138" r="6" fill="#FFFFFF" />
        <circle cx="160" cy="132" r="6" fill="#FFFFFF" />

      </g>
    </svg>
  );
}