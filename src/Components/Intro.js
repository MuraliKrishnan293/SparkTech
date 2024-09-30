// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Intro = () => {
//   const main = useRef();

//   useLayoutEffect(() => {
//     // gsap.fromTo(
//     //   '.box',
//     //   { opacity: 0 },
//     //   {
//     //     opacity: 1,
//     //     duration: 2,
//     //     stagger: 0.5,
//     //   }
//     // );
//     document.body.style.overflow = 'hidden';

//     let ct = gsap.context(()=>{
//         const t1 = gsap.timeline({
//             onComplete: () => {
//                 // Enable scrolling after t1 animation completes
//                 document.body.style.overflow = 'auto';
//                 // Start t2 animation
//                 t2.play();
//               }
//         });
//         t1.from("#texts", {
//             xPercent: -100,
//             duration: 0.6,
//             delay: 0.6
//         }).
//         from(["#tt1","#tt2","#tt3"], {
//             opacity: 0,
//             y: "30",
//             ease: 'power4.in',
//             stagger: 0.8
//         }).
//         to(["#tt3","#tt2","#tt1"], {
//             opacity: 0,
//             y: "30",
//             ease: 'power4.in',
//             stagger: 0.6,
//             delay: 2,
//             duration: 0.6
//         }).
//         to("#texts", {
//             opacity: 0,
//             y: 0,
//             xPercent: -100,
//             ease: "back.inOut",
//             stagger: 100,
//             delay: 1.5,
//             // display: "none"
//         })

//         const t2 = gsap.timeline({ paused: true });
//         t2.from("#helloid",{
//             opacity: 0,
//             y: 0,
//             // ease: 'power4.in',
//             duration: 0.1,
//             delay: 0,
//             display: "none"
//         })
//         .to("#hello",{
//             opacity: 1,
//             y: -500,
//             // ease: 'power4.in',
//             duration: 0.8,
//             delay: 0
//         })
//         .fromTo("p", {
//             opacity: 0,
//             y: 20
//           }, {
//             opacity: 1,
//             y: 0,
//             duration: 0.5,
//             delay: 0.5
//           });
//     }, main);

//     return ()=> ct.revert();
//   }, []);

//   return (
//     <div ref={main} style={{ width: '100%', minHeight: '100vh' }} className='con d-flex flex-column bg-black justify-content-center align-items-center text-start overflow-hidden'>
//       <div id='texts' style={{ width: '100%', minHeight: '100vh' }} className='text d-flex flex-column bg-black justify-content-center align-items-start text-start texts bg-white text-wrap w-100'>
//         <h1 id='tt1' className='box' style={{}}>Web Developer</h1>
//         <h1 id='tt2' className='box'>Designer</h1>
//         <h1 id='tt3' className='box'>Engineer</h1>
//       </div>
//       <div id='helloid' className='hello'>
//         <h1 id='hello' className='text-white'>Hello</h1>
//       </div>
//       <div className=''>
//       <h1 id='tt' className='bo' style={{}}>Web Developer</h1>
//         <h1 id='tt' className='bo'>Designer</h1>
//         <h1 id='tt' className='bo'>Engineer</h1>
//       </div>
//     </div>
//   );
// };

// export default Intro;



import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Home from './Home';

const Intro = () => {
  const main = useRef();

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    let ct = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = 'auto';
          t2.play();
        }
      });

      t1.from("#texts", {
        xPercent: -100,
        duration: 0.6,
        delay: 0.6
      })
      .from(["#tt1", "#tt2", "#tt3"], {
        opacity: 0,
        y: 30,
        ease: 'power4.in',
        stagger: 0.8
      })
      .to(["#tt3", "#tt2", "#tt1"], {
        opacity: 0,
        y: 30,
        ease: 'power4.in',
        stagger: 0.6,
        delay: 2,
        duration: 0.6
      })
      .to("#texts", {
        opacity: 0,
        y: 0,
        xPercent: -100,
        ease: "back.inOut",
        stagger: 100,
        delay: 1.5,
        onComplete: () => {
          document.getElementById('texts').remove();
          document.body.style.overflow = 'auto';
          t2.play();
        }
      });

      const t2 = gsap.timeline({ paused: true });
      t2.from("#helloid", {
        opacity: 0,
        y: 0,
        duration: 0.1,
        delay: 0,
        display: "none"
      })
      .to("#hello", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1,
        stagger: 0.8
      })
    //   .from(".hidden-section", {
    //     opacity: 0,
    //     y: 20
    //   })
      .to(".hidden-section", {
        opacity: 1,
        duration: 0.8,
        delay: 2,
        display: "block",
        stagger: 0.8
      });
    }, main);

    return () => ct.revert();
  }, []);

  return (
    <div ref={main} style={{ width: '100%', minHeight: '100vh' }} className='con d-flex flex-column justify-content-center align-items-center text-start overflow-hidden'>
      <div id='texts' style={{ width: '100%', minHeight: '100vh' }} className='text d-flex flex-column justify-content-center align-items-start text-start texts bg-white text-wrap w-100'>
        <h1 id='tt1' className='box'>Web Developer</h1>
        <h1 id='tt2' className='box'>Designer</h1>
        <h1 id='tt3' className='box'>Engineer</h1>
      </div>
      
        <Home />
      </div>
  );
};

export default Intro;