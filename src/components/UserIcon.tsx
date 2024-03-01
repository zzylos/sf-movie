import { memo } from "react";

import { Icon, Icons } from "@/components/Icon";

export enum UserIcons {
  // CAT = "cat",
  // DESKTOP = "desktop",
  // STORM = "storm",
  WEED = "weed",
  USER_GROUP = "userGroup",
  COUCH = "couch",
  MOBILE = "mobile",
  TICKET = "ticket",
}

export interface UserIconProps {
  icon: UserIcons;
  className?: string;
}

const iconList: Record<UserIcons, string> = {
  // cat: `<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em" viewBox="-0.93 0 24 24"><path opacity="1" fill="currentColor" d="M11.7501 6.40636C10.2698 6.40636 10.1222 6.5625 9.3561 6.5625C8.71769 6.5625 6.80245 5 5.84485 5C4.88724 5 3.77004 5.5625 3.77004 7.1875V9.0625C3.77197 9.55469 3.95081 11.0634 4.65075 10.6602C3.82323 11.6382 3.73963 12.7786 3.751 13.8826C3.52812 13.947 3.30072 14.0196 3.08003 14.095C2.39614 14.3289 1.67085 14.6271 1.3432 14.8387C0.995241 15.0634 0.895339 15.5277 1.12006 15.8756C1.34478 16.2236 1.80903 16.3235 2.15698 16.0988C2.3132 15.9979 2.87823 15.7493 3.56532 15.5144C3.64124 15.4884 3.71731 15.4631 3.79298 15.4386C3.83925 15.8724 3.95408 16.2684 4.12478 16.6292L4.1012 16.6416C3.69148 16.8581 3.3113 17.1067 3.06889 17.2652C3.02694 17.2926 2.98912 17.3173 2.95599 17.3387C2.60803 17.5634 2.50813 18.0277 2.73285 18.3756C2.95757 18.7236 3.42182 18.8235 3.76978 18.5988C3.8109 18.5722 3.85472 18.5436 3.90097 18.5134C4.1463 18.3533 4.45999 18.1485 4.80199 17.9678C4.88218 17.9254 4.95935 17.887 5.03317 17.8524C6.76347 19.4748 9.86991 20 11.7501 20C13.6302 20 16.7367 19.4748 18.467 17.8524C18.5408 17.887 18.6179 17.9254 18.6981 17.9678C19.0401 18.1485 19.3538 18.3533 19.5991 18.5134C19.6454 18.5436 19.6892 18.5722 19.7303 18.5988C20.0783 18.8235 20.5425 18.7236 20.7673 18.3756C20.992 18.0277 20.8921 17.5634 20.5441 17.3387C20.511 17.3173 20.4732 17.2926 20.4312 17.2652C20.1888 17.1067 19.8086 16.8581 19.3989 16.6416L19.3754 16.6292C19.5461 16.2683 19.6609 15.8724 19.7072 15.4385C19.783 15.463 19.8592 15.4883 19.9352 15.5144C20.6223 15.7493 21.1874 15.9979 21.3436 16.0988C21.6915 16.3235 22.1558 16.2236 22.3805 15.8756C22.6052 15.5277 22.5053 15.0634 22.1574 14.8387C21.8297 14.6271 21.1044 14.3289 20.4205 14.095C20.1997 14.0195 19.9722 13.947 19.7492 13.8825C19.7605 12.7785 19.6769 11.6382 18.8494 10.6602C19.5494 11.0634 19.7282 9.55469 19.7302 9.0625V7.18761C19.7302 5.56261 18.6129 5.00011 17.6553 5.00011C16.6977 5.00011 14.7825 6.5625 14.1441 6.5625C13.378 6.5625 13.2305 6.40636 11.7501 6.40636ZM11.0745 15.6004C11.2771 15.5314 11.5162 15.5 11.7501 15.5C11.984 15.5 12.2231 15.5314 12.4257 15.6004C12.5251 15.6342 12.6467 15.6876 12.7537 15.7738C12.8612 15.8603 13.0001 16.0206 13.0001 16.25C13.0001 16.4794 12.8612 16.6397 12.7537 16.7262C12.6467 16.8124 12.5251 16.8658 12.4257 16.8996C12.2231 16.9686 11.984 17 11.7501 17C11.5162 17 11.2771 16.9686 11.0745 16.8996C10.9751 16.8658 10.8535 16.8124 10.7464 16.7262C10.6389 16.6397 10.5001 16.4794 10.5001 16.25C10.5001 16.0206 10.6389 15.8603 10.7464 15.7738C10.8535 15.6876 10.9751 15.6342 11.0745 15.6004ZM13.9201 12.5005C14.0566 12.2721 14.326 12 14.7301 12C15.1342 12 15.4036 12.2721 15.54 12.5005C15.6823 12.7387 15.7501 13.0274 15.7501 13.3125C15.7501 13.5976 15.6823 13.8863 15.54 14.1245C15.4036 14.3529 15.1342 14.625 14.7301 14.625C14.326 14.625 14.0566 14.3529 13.9201 14.1245C13.7778 13.8863 13.7101 13.5976 13.7101 13.3125C13.7101 13.0274 13.7778 12.7387 13.9201 12.5005ZM7.96016 12.5005C8.09658 12.2721 8.36599 12 8.7701 12C9.17421 12 9.44362 12.2721 9.58004 12.5005C9.72234 12.7387 9.79011 13.0274 9.79011 13.3125C9.79011 13.5976 9.72234 13.8863 9.58004 14.1245C9.44362 14.3529 9.17421 14.625 8.7701 14.625C8.36599 14.625 8.09658 14.3529 7.96016 14.1245C7.81786 13.8863 7.75009 13.5976 7.75009 13.3125C7.75009 13.0274 7.81786 12.7387 7.96016 12.5005Z" fill="#ffffff"></path> </g></svg>`,
  // desktop: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 16 16" height="1.5em" width="1.5em" fill="#ffffff"><path class="cls-1" d="M13,3H2v8H7v1H5v1h6V12H9V11h5V3Zm0,7H3V4H13Z"></path> </g></svg>`,
  // storm: `<svg viewBox="-0.658 0 22 22" xmlns="http://www.w3.org/2000/svg" height="1.5em" width="1.5em"><svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514.8 514.8" xml:space="preserve" stroke="#ffffff" fill="currentColor"><path d="M405.962,47.612c-7.037,0-13.674,1.597-19.688,4.312c-12.021-23.963-36.749-40.459-65.389-40.459 c-18.628,0-35.582,7.019-48.501,18.484C250.658,11.398,221.961,0,190.396,0C123.573,0,69.344,50.614,67.967,113.517 c-25.054,11.628-42.458,36.93-42.458,66.354c0,34.004,23.228,62.52,54.669,70.724l338.579,2.324 c39.178-1.405,70.533-33.526,70.533-73.048c0-28.219-15.988-52.661-39.388-64.872c2.61-5.929,4.121-12.441,4.121-19.335 C454.024,69.127,432.508,47.612,405.962,47.612z"></path> <path d="M141.818,372.364c8.501-16.438,9.524-91.36,9.524-91.36s-60.55,44.141-69.051,60.578 c-8.501,16.438-2.065,36.653,14.373,45.154C113.102,395.237,133.317,388.802,141.818,372.364z"></path> <path d="M266.13,372.364c8.501-16.438,9.524-91.36,9.524-91.36s-60.55,44.141-69.051,60.578 c-8.501,16.438-2.065,36.653,14.372,45.154C237.414,395.237,257.629,388.802,266.13,372.364z"></path> <path d="M354.861,386.736c16.438,8.501,36.653,2.065,45.154-14.372c8.501-16.438,9.524-91.36,9.524-91.36 s-60.55,44.141-69.051,60.578C331.988,358.021,338.423,378.235,354.861,386.736z"></path> <path d="M125.361,511.049c16.438,8.501,36.653,2.065,45.154-14.372c8.501-16.438,9.524-91.36,9.524-91.36 s-60.549,44.141-69.051,60.578C102.487,482.333,108.923,502.548,125.361,511.049z"></path> <path d="M249.673,511.049c16.438,8.501,36.653,2.065,45.154-14.372c8.501-16.438,9.524-91.36,9.524-91.36 s-60.55,44.141-69.051,60.578C226.8,482.333,233.235,502.548,249.673,511.049z"></path> </g> </g></svg>`,
  weed: `<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="1.2em" width="1.2em" viewBox="-0.28 0 14 14"><path d="m 6.7166611,12.574 c -0.0148,-0.025 0.0239,-0.3873 0.086,-0.8049 0.15945,-1.0727 0.16565,-1.0519 -0.19355,-0.6489 -0.71278,0.7997 -1.97853,1.4342 -2.86791,1.4377 l -0.23124,8e-4 0.10975,-0.1899 c 0.18343,-0.3175 0.81621,-0.9342 1.22089,-1.1899 l 0.38218,-0.2415 -0.71629,-0.037 c -1.08465,-0.056 -2.02969,-0.332 -2.96511,-0.8651 -0.2659,-0.1515 -0.5076,-0.2996 -0.53711,-0.3292 -0.0611,-0.061 0.54075,-0.2605 1.1251,-0.3727 0.55637,-0.1069 1.81182,-0.093 2.35531,0.026 0.24833,0.054 0.45856,0.092 0.46718,0.083 0.009,-0.01 -0.17711,-0.1654 -0.41274,-0.3484 -1.1623,-0.9025 -2.23982,-2.4603 -2.74539,-3.9692 -0.15169,-0.4527 -0.19195,-0.6461 -0.1345,-0.6461 0.0962,0 1.09962,0.466 1.45508,0.6758 0.99114,0.5848 1.96803,1.4759 2.62239,2.3919 0.19094,0.2673 0.33139,0.4313 0.31212,0.3645 -0.1302,-0.4514 -0.18645,-1.0455 -0.18693,-1.9743 -6e-4,-1.1733 0.0773,-1.7168 0.39632,-2.764 0.18583,-0.61 0.70207,-1.792 0.78268,-1.792 0.0606,0 0.45324,0.874 0.63238,1.4076 0.50068,1.4915 0.64388,3.3328 0.37036,4.7622 -0.0507,0.2651 -0.0922,0.5078 -0.0922,0.5394 0,0.032 0.15418,-0.1679 0.34264,-0.4434 0.85263,-1.2462 2.1468799,-2.3163 3.5227699,-2.9126 0.71906,-0.3116 0.69451,-0.3141 0.59638,0.061 -0.39513,1.5118 -1.56903,3.2744 -2.8711599,4.311 -0.24442,0.1946 -0.43064,0.3538 -0.41382,0.3538 0.0168,0 0.20314,-0.039 0.41403,-0.087 0.8953599,-0.2037 1.9150099,-0.1765 2.8794099,0.077 0.69537,0.1826 0.71136,0.2048 0.32487,0.4513 -0.96177,0.6135 -1.98991,0.9318 -3.2294399,0.9997 l -0.65158,0.036 0.36904,0.2183 c 0.35269,0.2086 1.1810699,1.0059 1.3254499,1.2757 0.0642,0.12 0.0538,0.1281 -0.16685,0.1281 -0.38973,0 -1.1398999,-0.2234 -1.6694499,-0.497 -0.37384,-0.1933 -0.62943,-0.3879 -1.01942,-0.7765 l -0.52048,-0.5186 0.16857,0.8201 c 0.0927,0.4511 0.16974,0.8679 0.17118,0.9264 0.002,0.091 -0.0555,0.1063 -0.38865,0.1063 -0.2152,0 -0.40338,-0.02 -0.41818,-0.046 z"></path></g></svg>`,
  userGroup: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 640 512"><path opacity="1" fill="currentColor" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>`,
  couch: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 640 512"><path opacity="1" fill="currentColor" d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z"/></svg>`,
  mobile: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 384 512"><path opacity="1" fill="currentColor" d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>`,
  ticket: `<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 576 512"><path opacity="1" fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>`,
};

export const UserIcon = memo((props: UserIconProps) => {
  const icon = iconList[props.icon];
  if (!icon) return <Icon className={props.className} icon={Icons.X} />;
  return (
    <span
      dangerouslySetInnerHTML={{ __html: icon }} // eslint-disable-line react/no-danger
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} // Apply inline CSS
      className={props.className}
    />
  );
});
