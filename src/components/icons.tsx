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
      <g fill="currentColor">
        <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z" />
        <path d="M168 88a40 40 0 0 0-76.42 14.94L55.37 139.1A8 8 0 0 0 56 152a8 8 0 0 0 8-8v-2.37l34.8-16.4a40 40 0 1 0 69.2-37.23ZM168 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24Z" />
      </g>
    </svg>
  );
}
