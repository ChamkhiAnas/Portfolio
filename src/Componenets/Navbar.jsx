import { NavLink } from "react-router";
import './Navbar.css'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); 


export default function Navbar(){
  
  const container = useRef();




  useGSAP(() => {
    const paths = container.current.querySelectorAll(".draw-path");

    paths.forEach((path) => {
      path.style.fill = "none";
      path.style.stroke = "none"; // optional if you don't want stroke visible
    });

    gsap.to(paths, {
      fill: "#000",          
      duration: 0.2,         
      ease: "power1.in",
      stagger: 0.1         
    });

  }, { scope: container });


 

    return (
       <nav className="flex max-w-3xl  items-center m-0 m-auto">

            <div id="svgArea" className=" pr-10 py-10">
                <NavLink to="/">


                <svg
                  ref={container}
                  className="transition-transform duration-150 ease-in-out"
                  id="myPortraitSvg"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  viewBox="0 0 1024 1024"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                  >
                    <path className="draw-path"  d="M4702 9885 c-40 -7 -103 -23 -141 -34 -38 -12 -85 -21 -104 -21 -173
                    0 -513 -136 -652 -261 -11 -10 -60 -34 -108 -54 -130 -52 -245 -108 -307 -150
                    -66 -45 -163 -138 -191 -182 -12 -19 -40 -41 -72 -56 -80 -37 -187 -118 -295
                    -221 -105 -101 -162 -185 -188 -276 -9 -30 -38 -98 -64 -150 -49 -98 -77 -185
                    -104 -325 -43 -228 -48 -412 -28 -975 17 -504 26 -589 78 -767 6 -22 3 -23
                    -42 -23 -59 0 -117 -27 -167 -78 -32 -32 -42 -55 -65 -138 -25 -96 -26 -107
                    -26 -364 2 -403 24 -600 100 -863 46 -159 101 -264 184 -348 70 -71 136 -114
                    214 -140 l50 -17 27 -140 c68 -350 167 -622 286 -791 l46 -66 4 -370 4 -370
                    -111 -53 c-91 -43 -123 -65 -177 -119 -76 -75 -114 -95 -495 -254 -130 -54
                    -310 -132 -400 -173 -90 -40 -234 -105 -320 -144 -465 -211 -1034 -521 -1102
                    -603 -30 -36 -33 -69 -8 -92 26 -23 71 -9 190 61 405 235 812 438 1441 717
                    256 114 477 213 492 220 l27 14 5 -172 c4 -140 10 -191 31 -275 53 -210 144
                    -412 269 -596 117 -174 355 -384 410 -363 29 11 19 31 -64 123 -300 329 -482
                    708 -496 1029 -8 193 20 290 115 396 43 49 160 134 169 125 3 -2 -1 -76 -8
                    -164 -10 -130 -10 -183 0 -274 36 -313 171 -570 437 -829 324 -314 743 -510
                    1244 -580 110 -16 429 -16 547 0 409 52 765 201 1068 444 114 92 270 257 343
                    365 182 266 250 531 224 874 -7 84 -12 166 -12 181 l0 28 63 -33 c72 -38 146
                    -108 175 -164 45 -87 56 -152 56 -309 0 -128 -4 -165 -27 -257 -48 -192 -129
                    -372 -255 -564 -59 -89 -183 -244 -241 -298 -17 -17 -31 -38 -31 -49 0 -16 5
                    -18 28 -13 73 18 140 63 232 155 194 195 344 481 416 796 23 103 27 143 28
                    280 1 88 -2 174 -6 192 l-7 32 87 -43 c118 -59 338 -154 702 -303 651 -267
                    1036 -451 1373 -656 108 -65 141 -72 170 -36 41 51 -1 101 -174 204 -376 224
                    -915 465 -1919 857 -177 69 -342 152 -398 200 -56 48 -146 97 -234 127 l-53
                    18 -3 375 -2 376 42 68 c117 192 218 503 279 860 l12 72 41 12 c180 53 327
                    209 394 420 67 208 97 390 113 681 15 273 8 455 -24 582 -28 110 -47 139 -125
                    178 -35 17 -64 23 -115 24 l-69 0 7 40 c28 173 37 290 45 565 4 173 14 369 20
                    435 17 167 8 476 -19 626 -80 455 -264 754 -578 943 -35 21 -63 43 -63 50 0
                    28 -104 171 -172 238 -135 131 -375 272 -647 379 -69 28 -157 64 -194 80 -114
                    52 -479 133 -712 159 -124 14 -385 11 -473 -5z m833 -472 c33 -27 91 -87 128
                    -133 133 -165 187 -323 172 -496 l-8 -89 -18 107 c-9 58 -22 123 -29 145 -42
                    128 -157 298 -310 456 l-115 120 60 -31 c33 -17 87 -52 120 -79z m-1048 32
                    c239 -39 440 -140 603 -304 99 -100 155 -192 205 -337 38 -109 38 -108 -38 21
                    -103 177 -306 353 -542 472 -99 50 -290 126 -345 138 -120 25 -27 33 117 10z
                    m-352 -339 c156 -42 289 -113 391 -209 59 -54 154 -173 154 -191 0 -4 -35 25
                    -78 64 -43 39 -111 94 -152 121 -152 102 -385 195 -556 224 l-89 14 135 -4
                    c80 -2 160 -10 195 -19z m-516 -276 c82 -23 168 -63 233 -109 42 -29 148 -131
                    136 -131 -3 0 -57 25 -119 54 -211 101 -348 136 -571 143 -87 3 -156 9 -153
                    13 4 7 123 42 185 54 51 10 217 -4 289 -24z m1796 -375 c56 -28 67 -30 165
                    -29 63 0 130 7 168 17 85 23 202 21 342 -3 63 -11 174 -27 245 -34 72 -8 153
                    -22 180 -31 203 -68 355 -271 401 -538 13 -74 15 -130 9 -292 -10 -323 12
                    -450 116 -658 129 -256 171 -461 188 -925 15 -383 -10 -770 -84 -1309 -66
                    -473 -130 -723 -248 -958 -78 -157 -284 -460 -430 -634 -214 -255 -504 -538
                    -655 -638 -140 -94 -293 -151 -463 -173 -99 -13 -514 -13 -617 0 -176 22 -372
                    100 -509 202 -186 139 -558 506 -730 720 -284 354 -451 686 -527 1045 -27 127
                    -85 524 -110 743 -34 307 -41 434 -41 785 1 313 4 382 23 524 12 91 22 187 22
                    213 0 37 18 94 74 236 86 218 100 260 121 364 20 101 20 315 -1 483 -19 148
                    -14 305 12 400 42 156 152 295 285 358 159 76 246 87 769 98 239 5 446 9 460
                    10 14 1 76 -6 139 -15 203 -29 378 -15 545 43 44 15 83 28 86 27 3 -1 32 -14
                    65 -31z m-2879 -2242 c46 -49 76 -128 94 -240 6 -37 13 -79 16 -93 4 -14 -17
                    10 -46 54 -28 44 -89 118 -136 165 -46 47 -84 89 -84 93 0 16 66 48 98 48 23
                    0 41 -8 58 -27z m5095 -5 c22 -12 39 -25 39 -29 0 -4 -25 -29 -55 -55 -66 -57
                    -132 -139 -186 -231 -21 -37 -39 -63 -39 -57 0 20 29 233 36 261 17 72 80 133
                    138 133 15 0 46 -10 67 -22z m-5193 -236 c39 -52 141 -247 157 -300 4 -15 0
                    -31 -14 -50 -52 -74 -65 -129 -65 -282 -1 -161 11 -291 28 -302 6 -4 18 -5 28
                    -2 9 2 19 0 23 -6 13 -22 55 -10 74 21 l19 31 7 -71 c4 -39 17 -144 30 -233
                    12 -90 21 -165 19 -167 -2 -2 -27 11 -55 30 -154 99 -275 392 -314 758 -25
                    234 -17 632 13 631 4 0 26 -26 50 -58z m5250 -175 c4 -199 -9 -404 -34 -540
                    -39 -212 -129 -428 -219 -525 -52 -57 -135 -113 -135 -92 0 6 11 95 24 198 14
                    103 34 290 46 416 11 127 22 231 24 233 1 2 11 -16 22 -39 15 -35 19 -65 18
                    -163 0 -66 -5 -137 -11 -157 -10 -32 -9 -41 6 -59 15 -18 21 -20 39 -10 12 6
                    26 19 30 29 33 63 47 324 23 412 -7 25 -28 72 -47 104 l-35 59 51 100 c52 101
                    116 203 154 245 l20 23 10 -23 c5 -13 12 -108 14 -211z m-5023 -502 c9 -104
                    19 -193 22 -197 11 -20 -22 -5 -47 20 -25 25 -29 38 -35 115 -4 48 -4 108 0
                    134 6 44 34 127 40 121 2 -2 11 -88 20 -193z m4137 -2745 c7 -63 13 -209 13
                    -325 0 -245 -15 -326 -89 -479 -132 -276 -427 -548 -784 -722 -713 -349 -1632
                    -213 -2242 331 -269 240 -461 571 -460 794 0 36 9 140 20 231 11 91 25 293 30
                    450 6 157 12 288 13 292 1 4 43 -41 92 -100 111 -132 490 -513 614 -615 219
                    -183 412 -277 644 -314 131 -21 606 -24 745 -5 184 25 378 106 552 230 171
                    121 578 537 757 772 l68 90 7 -257 c4 -142 13 -310 20 -373z"/>
                    <path className="draw-path"  d="M3688 6739 c-206 -14 -304 -50 -419 -157 -140 -130 -214 -286 -178
                    -379 l10 -27 47 51 c56 62 134 113 236 153 199 80 419 94 1031 65 131 -7 158
                    0 184 46 33 59 -29 163 -124 209 -80 39 -492 59 -787 39z"/>
                    <path className="draw-path"  d="M5893 6735 c-135 -10 -192 -18 -225 -33 -123 -54 -186 -178 -122
                    -237 37 -35 89 -39 269 -21 266 26 381 29 545 17 122 -10 174 -19 243 -42 139
                    -46 234 -94 305 -155 l66 -56 10 28 c12 37 -8 145 -39 210 -32 65 -140 170
                    -226 217 -108 61 -187 75 -431 81 -131 3 -283 -1 -395 -9z"/>
                    <path className="draw-path" d="M3824 6280 c-73 -13 -174 -52 -240 -91 -111 -67 -235 -200 -223 -238
                    2 -6 42 12 89 40 108 66 214 116 263 125 l37 6 0 -48 c0 -103 36 -166 115
                    -203 155 -73 313 36 303 209 -1 33 1 60 5 60 22 0 77 -39 149 -106 43 -41 85
                    -74 92 -74 19 0 27 40 17 78 -26 89 -135 186 -250 223 -75 24 -271 34 -357 19z
                    m246 -155 c17 -20 5 -45 -20 -45 -11 0 -23 7 -26 15 -6 15 11 45 26 45 4 0 13
                    -7 20 -15z"/>
                    <path className="draw-path" d="M5955 6265 c-171 -32 -286 -108 -349 -232 -17 -35 -21 -73 -7 -73 5
                    0 44 25 87 55 94 65 160 102 194 106 24 4 25 1 32 -58 9 -79 37 -144 74 -170
                    99 -69 241 -53 298 34 32 50 49 118 42 165 -5 28 -3 38 7 38 26 0 177 -80 256
                    -135 45 -31 81 -53 82 -48 3 25 -5 71 -16 93 -43 82 -229 195 -371 225 -84 18
                    -234 18 -329 0z m263 -137 c16 -16 -3 -48 -29 -48 -22 0 -34 22 -25 45 6 18
                    37 20 54 3z"/>
                    <path className="draw-path" d="M4687 5883 c-3 -168 -11 -305 -21 -368 -20 -130 -21 -205 -2 -205 30
                    0 94 175 122 333 20 114 18 265 -4 358 -20 84 -50 142 -74 147 -14 3 -16 -28
                    -21 -265z"/>
                    <path className="draw-path" d="M4469 5018 c-104 -104 -127 -309 -48 -418 52 -72 171 -122 244 -102
                    45 13 41 33 -15 70 -55 36 -104 103 -121 167 -18 64 -7 202 20 253 25 49 21
                    62 -19 62 -19 0 -39 -11 -61 -32z"/>
                    <path className="draw-path" d="M5565 5029 c-4 -6 5 -38 20 -71 25 -55 27 -69 23 -152 -3 -77 -8 -99
                    -30 -137 -27 -46 -109 -129 -128 -129 -18 0 -11 -19 12 -31 33 -18 111 -13
                    155 10 93 47 148 146 141 255 -7 118 -101 266 -169 266 -10 0 -21 -5 -24 -11z"/>
                    <path className="draw-path" d="M4690 4719 c-30 -12 -40 -27 -40 -60 0 -48 46 -73 176 -100 57 -11
                    108 -28 131 -43 78 -51 180 -52 232 -2 22 21 44 29 96 37 119 17 185 42 205
                    78 15 29 13 39 -15 66 -35 36 -101 34 -213 -7 -77 -28 -99 -31 -192 -32 -94 0
                    -114 3 -188 31 -96 37 -157 47 -192 32z"/>
                    <path className="draw-path" d="M4126 3990 c-42 -13 -66 -39 -66 -73 0 -88 143 -129 580 -167 398
                    -35 463 -35 770 -6 310 30 426 47 520 78 107 35 149 98 97 146 -35 33 -89 29
                    -172 -12 l-70 -35 -255 -10 c-192 -8 -280 -16 -355 -32 -89 -19 -109 -20 -175
                    -10 -197 30 -302 41 -486 47 -198 7 -199 7 -259 39 -76 40 -93 45 -129 35z"/>
                    <path className="draw-path" d="M4566 3527 c-19 -14 -19 -15 0 -48 26 -45 125 -111 211 -140 62 -22
                    84 -24 258 -24 169 0 198 2 261 22 119 38 239 129 232 177 -4 30 -34 31 -119
                    2 -180 -60 -573 -60 -733 1 -63 23 -89 26 -110 10z"/>
                  </g>
                </svg>
              


                {/* <svg  ref={container} className="transition-transform duration-150 ease-in-out" id="myPortraitSvg" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="75" height="75" viewBox="0 0 1024.000000 1024.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path className="draw-path"  d="M4702 9885 c-40 -7 -103 -23 -141 -34 -38 -12 -85 -21 -104 -21 -173
                    0 -513 -136 -652 -261 -11 -10 -60 -34 -108 -54 -130 -52 -245 -108 -307 -150
                    -66 -45 -163 -138 -191 -182 -12 -19 -40 -41 -72 -56 -80 -37 -187 -118 -295
                    -221 -105 -101 -162 -185 -188 -276 -9 -30 -38 -98 -64 -150 -49 -98 -77 -185
                    -104 -325 -43 -228 -48 -412 -28 -975 17 -504 26 -589 78 -767 6 -22 3 -23
                    -42 -23 -59 0 -117 -27 -167 -78 -32 -32 -42 -55 -65 -138 -25 -96 -26 -107
                    -26 -364 2 -403 24 -600 100 -863 46 -159 101 -264 184 -348 70 -71 136 -114
                    214 -140 l50 -17 27 -140 c68 -350 167 -622 286 -791 l46 -66 4 -370 4 -370
                    -111 -53 c-91 -43 -123 -65 -177 -119 -76 -75 -114 -95 -495 -254 -130 -54
                    -310 -132 -400 -173 -90 -40 -234 -105 -320 -144 -465 -211 -1034 -521 -1102
                    -603 -30 -36 -33 -69 -8 -92 26 -23 71 -9 190 61 405 235 812 438 1441 717
                    256 114 477 213 492 220 l27 14 5 -172 c4 -140 10 -191 31 -275 53 -210 144
                    -412 269 -596 117 -174 355 -384 410 -363 29 11 19 31 -64 123 -300 329 -482
                    708 -496 1029 -8 193 20 290 115 396 43 49 160 134 169 125 3 -2 -1 -76 -8
                    -164 -10 -130 -10 -183 0 -274 36 -313 171 -570 437 -829 324 -314 743 -510
                    1244 -580 110 -16 429 -16 547 0 409 52 765 201 1068 444 114 92 270 257 343
                    365 182 266 250 531 224 874 -7 84 -12 166 -12 181 l0 28 63 -33 c72 -38 146
                    -108 175 -164 45 -87 56 -152 56 -309 0 -128 -4 -165 -27 -257 -48 -192 -129
                    -372 -255 -564 -59 -89 -183 -244 -241 -298 -17 -17 -31 -38 -31 -49 0 -16 5
                    -18 28 -13 73 18 140 63 232 155 194 195 344 481 416 796 23 103 27 143 28
                    280 1 88 -2 174 -6 192 l-7 32 87 -43 c118 -59 338 -154 702 -303 651 -267
                    1036 -451 1373 -656 108 -65 141 -72 170 -36 41 51 -1 101 -174 204 -376 224
                    -915 465 -1919 857 -177 69 -342 152 -398 200 -56 48 -146 97 -234 127 l-53
                    18 -3 375 -2 376 42 68 c117 192 218 503 279 860 l12 72 41 12 c180 53 327
                    209 394 420 67 208 97 390 113 681 15 273 8 455 -24 582 -28 110 -47 139 -125
                    178 -35 17 -64 23 -115 24 l-69 0 7 40 c28 173 37 290 45 565 4 173 14 369 20
                    435 17 167 8 476 -19 626 -80 455 -264 754 -578 943 -35 21 -63 43 -63 50 0
                    28 -104 171 -172 238 -135 131 -375 272 -647 379 -69 28 -157 64 -194 80 -114
                    52 -479 133 -712 159 -124 14 -385 11 -473 -5z m833 -472 c33 -27 91 -87 128
                    -133 133 -165 187 -323 172 -496 l-8 -89 -18 107 c-9 58 -22 123 -29 145 -42
                    128 -157 298 -310 456 l-115 120 60 -31 c33 -17 87 -52 120 -79z m-1048 32
                    c239 -39 440 -140 603 -304 99 -100 155 -192 205 -337 38 -109 38 -108 -38 21
                    -103 177 -306 353 -542 472 -99 50 -290 126 -345 138 -120 25 -27 33 117 10z
                    m-352 -339 c156 -42 289 -113 391 -209 59 -54 154 -173 154 -191 0 -4 -35 25
                    -78 64 -43 39 -111 94 -152 121 -152 102 -385 195 -556 224 l-89 14 135 -4
                    c80 -2 160 -10 195 -19z m-516 -276 c82 -23 168 -63 233 -109 42 -29 148 -131
                    136 -131 -3 0 -57 25 -119 54 -211 101 -348 136 -571 143 -87 3 -156 9 -153
                    13 4 7 123 42 185 54 51 10 217 -4 289 -24z m1796 -375 c56 -28 67 -30 165
                    -29 63 0 130 7 168 17 85 23 202 21 342 -3 63 -11 174 -27 245 -34 72 -8 153
                    -22 180 -31 203 -68 355 -271 401 -538 13 -74 15 -130 9 -292 -10 -323 12
                    -450 116 -658 129 -256 171 -461 188 -925 15 -383 -10 -770 -84 -1309 -66
                    -473 -130 -723 -248 -958 -78 -157 -284 -460 -430 -634 -214 -255 -504 -538
                    -655 -638 -140 -94 -293 -151 -463 -173 -99 -13 -514 -13 -617 0 -176 22 -372
                    100 -509 202 -186 139 -558 506 -730 720 -284 354 -451 686 -527 1045 -27 127
                    -85 524 -110 743 -34 307 -41 434 -41 785 1 313 4 382 23 524 12 91 22 187 22
                    213 0 37 18 94 74 236 86 218 100 260 121 364 20 101 20 315 -1 483 -19 148
                    -14 305 12 400 42 156 152 295 285 358 159 76 246 87 769 98 239 5 446 9 460
                    10 14 1 76 -6 139 -15 203 -29 378 -15 545 43 44 15 83 28 86 27 3 -1 32 -14
                    65 -31z m-2879 -2242 c46 -49 76 -128 94 -240 6 -37 13 -79 16 -93 4 -14 -17
                    10 -46 54 -28 44 -89 118 -136 165 -46 47 -84 89 -84 93 0 16 66 48 98 48 23
                    0 41 -8 58 -27z m5095 -5 c22 -12 39 -25 39 -29 0 -4 -25 -29 -55 -55 -66 -57
                    -132 -139 -186 -231 -21 -37 -39 -63 -39 -57 0 20 29 233 36 261 17 72 80 133
                    138 133 15 0 46 -10 67 -22z m-5193 -236 c39 -52 141 -247 157 -300 4 -15 0
                    -31 -14 -50 -52 -74 -65 -129 -65 -282 -1 -161 11 -291 28 -302 6 -4 18 -5 28
                    -2 9 2 19 0 23 -6 13 -22 55 -10 74 21 l19 31 7 -71 c4 -39 17 -144 30 -233
                    12 -90 21 -165 19 -167 -2 -2 -27 11 -55 30 -154 99 -275 392 -314 758 -25
                    234 -17 632 13 631 4 0 26 -26 50 -58z m5250 -175 c4 -199 -9 -404 -34 -540
                    -39 -212 -129 -428 -219 -525 -52 -57 -135 -113 -135 -92 0 6 11 95 24 198 14
                    103 34 290 46 416 11 127 22 231 24 233 1 2 11 -16 22 -39 15 -35 19 -65 18
                    -163 0 -66 -5 -137 -11 -157 -10 -32 -9 -41 6 -59 15 -18 21 -20 39 -10 12 6
                    26 19 30 29 33 63 47 324 23 412 -7 25 -28 72 -47 104 l-35 59 51 100 c52 101
                    116 203 154 245 l20 23 10 -23 c5 -13 12 -108 14 -211z m-5023 -502 c9 -104
                    19 -193 22 -197 11 -20 -22 -5 -47 20 -25 25 -29 38 -35 115 -4 48 -4 108 0
                    134 6 44 34 127 40 121 2 -2 11 -88 20 -193z m4137 -2745 c7 -63 13 -209 13
                    -325 0 -245 -15 -326 -89 -479 -132 -276 -427 -548 -784 -722 -713 -349 -1632
                    -213 -2242 331 -269 240 -461 571 -460 794 0 36 9 140 20 231 11 91 25 293 30
                    450 6 157 12 288 13 292 1 4 43 -41 92 -100 111 -132 490 -513 614 -615 219
                    -183 412 -277 644 -314 131 -21 606 -24 745 -5 184 25 378 106 552 230 171
                    121 578 537 757 772 l68 90 7 -257 c4 -142 13 -310 20 -373z"/>
                    <path className="draw-path"  d="M3688 6739 c-206 -14 -304 -50 -419 -157 -140 -130 -214 -286 -178
                    -379 l10 -27 47 51 c56 62 134 113 236 153 199 80 419 94 1031 65 131 -7 158
                    0 184 46 33 59 -29 163 -124 209 -80 39 -492 59 -787 39z"/>
                    <path className="draw-path"  d="M5893 6735 c-135 -10 -192 -18 -225 -33 -123 -54 -186 -178 -122
                    -237 37 -35 89 -39 269 -21 266 26 381 29 545 17 122 -10 174 -19 243 -42 139
                    -46 234 -94 305 -155 l66 -56 10 28 c12 37 -8 145 -39 210 -32 65 -140 170
                    -226 217 -108 61 -187 75 -431 81 -131 3 -283 -1 -395 -9z"/>
                    <path className="draw-path" d="M3824 6280 c-73 -13 -174 -52 -240 -91 -111 -67 -235 -200 -223 -238
                    2 -6 42 12 89 40 108 66 214 116 263 125 l37 6 0 -48 c0 -103 36 -166 115
                    -203 155 -73 313 36 303 209 -1 33 1 60 5 60 22 0 77 -39 149 -106 43 -41 85
                    -74 92 -74 19 0 27 40 17 78 -26 89 -135 186 -250 223 -75 24 -271 34 -357 19z
                    m246 -155 c17 -20 5 -45 -20 -45 -11 0 -23 7 -26 15 -6 15 11 45 26 45 4 0 13
                    -7 20 -15z"/>
                    <path className="draw-path" d="M5955 6265 c-171 -32 -286 -108 -349 -232 -17 -35 -21 -73 -7 -73 5
                    0 44 25 87 55 94 65 160 102 194 106 24 4 25 1 32 -58 9 -79 37 -144 74 -170
                    99 -69 241 -53 298 34 32 50 49 118 42 165 -5 28 -3 38 7 38 26 0 177 -80 256
                    -135 45 -31 81 -53 82 -48 3 25 -5 71 -16 93 -43 82 -229 195 -371 225 -84 18
                    -234 18 -329 0z m263 -137 c16 -16 -3 -48 -29 -48 -22 0 -34 22 -25 45 6 18
                    37 20 54 3z"/>
                    <path className="draw-path" d="M4687 5883 c-3 -168 -11 -305 -21 -368 -20 -130 -21 -205 -2 -205 30
                    0 94 175 122 333 20 114 18 265 -4 358 -20 84 -50 142 -74 147 -14 3 -16 -28
                    -21 -265z"/>
                    <path className="draw-path" d="M4469 5018 c-104 -104 -127 -309 -48 -418 52 -72 171 -122 244 -102
                    45 13 41 33 -15 70 -55 36 -104 103 -121 167 -18 64 -7 202 20 253 25 49 21
                    62 -19 62 -19 0 -39 -11 -61 -32z"/>
                    <path className="draw-path" d="M5565 5029 c-4 -6 5 -38 20 -71 25 -55 27 -69 23 -152 -3 -77 -8 -99
                    -30 -137 -27 -46 -109 -129 -128 -129 -18 0 -11 -19 12 -31 33 -18 111 -13
                    155 10 93 47 148 146 141 255 -7 118 -101 266 -169 266 -10 0 -21 -5 -24 -11z"/>
                    <path className="draw-path" d="M4690 4719 c-30 -12 -40 -27 -40 -60 0 -48 46 -73 176 -100 57 -11
                    108 -28 131 -43 78 -51 180 -52 232 -2 22 21 44 29 96 37 119 17 185 42 205
                    78 15 29 13 39 -15 66 -35 36 -101 34 -213 -7 -77 -28 -99 -31 -192 -32 -94 0
                    -114 3 -188 31 -96 37 -157 47 -192 32z"/>
                    <path className="draw-path" d="M4126 3990 c-42 -13 -66 -39 -66 -73 0 -88 143 -129 580 -167 398
                    -35 463 -35 770 -6 310 30 426 47 520 78 107 35 149 98 97 146 -35 33 -89 29
                    -172 -12 l-70 -35 -255 -10 c-192 -8 -280 -16 -355 -32 -89 -19 -109 -20 -175
                    -10 -197 30 -302 41 -486 47 -198 7 -199 7 -259 39 -76 40 -93 45 -129 35z"/>
                    <path className="draw-path" d="M4566 3527 c-19 -14 -19 -15 0 -48 26 -45 125 -111 211 -140 62 -22
                    84 -24 258 -24 169 0 198 2 261 22 119 38 239 129 232 177 -4 30 -34 31 -119
                    2 -180 -60 -573 -60 -733 1 -63 23 -89 26 -110 10z"/>
                    </g>
                    </svg> */}
                </NavLink>
            </div>

            <ul className="flex gap-2 text-gray-700 font-medium underline cursor-pointer text-sm ml-auto">

                    <li className="w-8 h-8   cursor-pointer flex justify-center items-center rounded-md hover:bg-gray-200   transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></li>
                    <li className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-md hover:bg-gray-200   transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg></li>
                    <li className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-md hover:bg-gray-200   transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.197 11.217c5.07 0 5.07 6.783 0 6.783H2v-6.783m6.197 0H2m6.197 0c5.07 0 5.07-6.217 0-6.217H2v6.217M18 9c-2.21 0-4 2.015-4 4.5h8c0-2.485-1.79-4.5-4-4.5m-4 4.5c0 2.485 1.79 4.5 4 4.5c2.755 0 3.5-2 3.5-2m-1-10h-5"/></svg></li>
                    <li className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-md hover:bg-gray-200   transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></li>
                    <li className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-md hover:bg-gray-200   transition-colors"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></li>
            </ul>

       </nav>
    )
}