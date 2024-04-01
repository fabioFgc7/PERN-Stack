import { SVGProps } from "react";
export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
    width={16}
    height={16}
    {...props}>
    <path
      className='fill-red-500'
      d='M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4c-16.8 0-32.4 8.827-41 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16c0 8.9 7.125 16 16 16h16v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16c8.9 0 16-7.1 16-16V96c0-8.87-7.1-16-16-16zM171.9 50.88c1-1.75 3-2.88 5.1-2.88h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4l17.5-29.12zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320c0 8.8-7.2 16-16 16zm-128-48c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16s-16 7.2-16 16v208c0 8.8 7.2 16 16 16zm-80 0c8.8 0 16-7.2 16-16V192c0-8.844-7.156-16-16-16s-16 7.2-16 16v208c0 8.8 7.2 16 16 16zm160 0c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16s-16 7.2-16 16v208c0 8.8 7.2 16 16 16z'
    />
  </svg>
);
export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='feather feather-edit'
    {...props}>
    <path
      className='stroke-sky-500'
      d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'
    />
    <path
      className='stroke-sky-500'
      d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'
    />
  </svg>
);
export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={24}
    height={24}
    viewBox='0 0 32 32'
    {...props}>
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M31.106 15H3.278l8.325-8.293a.999.999 0 1 0-1.414-1.414l-9.9 9.899a1.01 1.01 0 0 0 0 1.414l9.9 9.9a.999.999 0 1 0 1.414-1.414L3.278 17h27.828a1 1 0 0 0 0-2z'
      clipRule='evenodd'
    />
  </svg>
);
export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    width={24}
    height={24}
    {...props}>
    <title />
    <g data-name='Layer 2'>
      <path
        className='fill-sky-600'
        d='M16 29a13 13 0 1 1 13-13 13 13 0 0 1-13 13Zm0-24a11 11 0 1 0 11 11A11 11 0 0 0 16 5Z'
      />
      <path
        className='fill-sky-600'
        d='M16 23a1 1 0 0 1-1-1V10a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1Z'
      />
      <path
        className='fill-sky-600'
        d='M22 17H10a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Z'
      />
    </g>
    <path
      d='M0 0h32v32H0z'
      style={{
        fill: "none",
      }}
    />
  </svg>
);
