import React from 'react'
// import style from './features.module.css'
import { AiFillGoogleCircle } from 'react-icons/ai';





const logo=[
  {
    "img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png",},
   { "img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png",},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png",},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png"},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png"},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png"},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png"},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png"},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png"},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png"},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png"},
    {"img":"https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png"},
]




const Features = () => {
  return (
    <div className=''>
    <div className='grid m-auto bg-slate-200 justify-center pt-8' >
         <div className='flex flex-1 w-3/4 m-auto mt-9 border' >
          <div className=' text-start '>
              <h1 className='font-bold text-5xl w-96'>Time tracker your team will actually use</h1>
              <p className='text-gray-500 font-semibold mt-8 mb-8 leading-6'>Track time against your projects and create report and timesheets in seconds. </p>

              <input type="text" className='text-sm  rounded-full absolute pl-4 shadow-lg focus:outline-none shadow-black-900 h-12 w-72' placeholder='Add your email'/>
              <button className='ml-0 rounded-full font-semibold h-12 w-48 text-white relative left-56 hover:bg-green-600  bg-green-500'>Start tracking time</button>

              <div className='flex gap-1 text-sm mt-8 mb-16'>
                <div className='flex gap-0 w-72'>
                  
                        <p className='text-gray-500 mt-1'>Or sign uo with:</p>
                            <AiFillGoogleCircle className='ml-0 text-4xl text-green-500'/>
                </div>
                            <p className='text-gray-500'>By signing up you agree to our <span className='text-green-500'> Terms and Conditions </span>
                               and <span className='text-green-500'> Privacy Policy.</span>

                            </p>
              </div>
              



          </div>
          <div>
            <img src="https://cdn-m.timecamp.com/img/greenbranding/features/timesheet-features.svg" alt="a" />

          </div>
         </div>
         </div>

<div className='bg-green-500 w-full p-6'>
  <p className='mb-8 text-white font-semibold text-xl text-center '>Trusted by 18,000 teams from all over the world (and still growing!)</p>
<div className='flex gap-12 m-auto justify-center'>
  <img className='W-full' src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png" alt="" />
  <img className='W-full' src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png" alt="" />
  <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" alt="" />
  <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png" alt="" />
  <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png" alt="" />
  <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png" alt="" />
</div>
</div>

<div className='w-full mt-20'>
<img className='relative left-96 -mt-6' src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg" alt="" />
<img className='relative left-2/3 -mt-10'  src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg" alt="" />
 
  <div className='w-3/4 h-28 bg-gray-100 flex m-auto  p-12 rounded-xl justify-between'>
   
    <div className='-mt-6'>

    <h4 className='font-semibold text-start text-lg'>Schedule a demo and learn more about TimeCamp</h4>
    <p className='text-start mt-2 text-base ' >Hop on a call with TimeCamp's top minds to get the best possible introduction to our product.</p>
    </div>

  <button className='bg-yellow-400 -mt-3  h-14 hover:bg-yellow-500 text-white font-semibold p-4 rounded-full w-36'>Book a demo</button>
  </div>

<img className='relative left-80 -mt-4' src="https://cdn-m.timecamp.com/img/greenbranding/blueSmallCircle.svg" alt="" />
<img className='relative left-2/3 -mt-6'  src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallCircle.svg" alt="" />

</div>

<h1 className='text-4xl font-bold mt-12 text-center'>One app. A multitude of benefits</h1>

<div className='grid m-auto bg-white justify-center mt-8' >
         <div className='flex flex-1 w-3/4 m-auto mt-9 cursor-pointer' >
         <div className=' text-start'>

          <div className='border-l-8 border-green-600 pl-8 pb-6 shadow-[8px_15px_60px_-15px_rgba(0,0,0,0.3)]'>
          <h3 className='font-bold text-xl'>Track a team's performance</h3>
          <p className=' text-sm w-96'>
            See at a glance how your team is performing and how much time they
            spend on a given project or task.</p>
          </div>
          <hr />

          <div className='pl-8 pb-6 active:border-l-8 border-green-600'>
          <h3 className='font-bold text-xl'>Track project profitability</h3>
          <p className=' text-sm w-96'>
              Is your project still within its budget? What is the profit margin
              across different projects? With TimeCamp, budgeting and billing will
              become easy as pie.</p>

          </div>
          <div  className='pl-8 pb-6 active:border-l-8 border-green-600'>
          <h3 className='font-bold text-xl'>Track project profitability</h3>
          <p className=' text-sm w-96'>

                    Get your team’s proof of work. Measure their productivity and the
          time spent on different apps and websites.</p>

          </div>
  
          </div>
          <div>
            
            <p className='relative border bg-white border-yellow-500 rounded-full p-2 text-sm w-80 ml-48'>In this report, you can see the percentage of time spent on 
              work-related apps & websites by each team member.</p>
            <img className=' -mt-16' src="https://cdn-m.timecamp.com/img/greenbranding/features/performance.jpg" alt="a" />

          </div>
         </div>
         </div>

<div className='flex justify-center m-auto mt-48 w-3/4 gap-8'>
<div className=''>
<p className='text-start text-sm text-blue-500'>Automatic time tracking app</p>
<h1 className='text-start text-4xl font-bold text-gray-900 mt-4' >More focus thanks to automatic time tracking</h1>

<p className='text-start text-sm mt-4'>TimeCamp automatically scans the domain names of your apps and groups them to pre-defined categories.
   Thanks to this, you can focus on your work.</p>

<button className='border rounded-full mt-4 hover:bg-gray-400 text-sm pl-6 pr-6 pt-2 pb-2 font-semibold bg-gray-200'>More about automaic time tracking</button>

</div>
<img className='' src="https://cdn-m.timecamp.com/img/greenbranding/features/automaticTimeTracking.png" alt="" />
</div>




<div className='flex justify-center m-auto mt-48 w-3/4 gap-8'>
<img className='' src="https://cdn-m.timecamp.com/img/greenbranding/features/productivityTracking.png" alt="" />
<div className=''>
<p className='text-start text-sm text-blue-500'>Productivity tracking</p>
<h1 className='text-start text-4xl font-bold text-gray-900 mt-4' >More insights with productivity tracking</h1>
<p className='text-start text-sm mt-4'>If you're in need to track the usage of certain apps by your team, try this! Stay on the same page with your team without any micromanagement.</p>
<button className='border rounded-full mt-4 hover:bg-gray-400 text-sm pl-6 pr-6 pt-2 pb-2 font-semibold bg-gray-200'>More about Productivety tracking</button>
</div>
</div>


<div className='flex justify-center m-auto mt-48 w-3/4 gap-8'>
<div className=''>
<p className='text-start text-sm text-blue-500'>Time tracking reports</p>
<h1 className='text-start text-4xl font-bold text-gray-900 mt-4' >Easy and insightful reports</h1>
<p className='text-start text-sm mt-4'>Do you need to measure the profitability of your projects? Or maybe you need to keep track of your budget? TimeCamp does it all. One app. Many features.</p>
<button className='border rounded-full mt-4 hover:bg-gray-400 text-sm pl-6 pr-6 pt-2 pb-2 font-semibold bg-gray-200'>Learn More about timecamp report</button>
</div>
<img className='' src="https://cdn-m.timecamp.com/img/greenbranding/features/easyReports.png" alt="" />
</div>

<div className='flex justify-center m-auto mt-48 w-3/4 gap-8'>
<img className='' src="https://cdn-m.timecamp.com/img/greenbranding/features/featuresBilling.png" alt="" />
<div className=''>
<p className='text-start text-sm text-blue-500'>
Custom billing rates</p>
<h1 className='text-start text-4xl font-bold text-gray-900 mt-4' >Keeping track of your billables</h1>
<p className='text-start text-sm mt-4'>TimeCamp's billing feature allows you to mark your tracked time as either billable or non-billable which significantly speeds up your invoicing as well as resource management.</p>
<button className='border rounded-full mt-4 hover:bg-gray-400 text-sm pl-6 pr-6 pt-2 pb-2 font-semibold bg-gray-200'>
 Learn More about billing rates in TimeCamp</button>
</div>
</div>


<div className='flex justify-center m-auto mt-48 w-3/4 gap-8'>
<div className=''>
<p className='text-start text-sm text-blue-500'>
Timesheet approvals</p>
<h1 className='text-start text-4xl font-bold text-gray-900 mt-4 w-3/5' >One-click approvals</h1>
<p className='text-start text-sm mt-4 w-72'>Tired of manually going through your team's timesheets at the end of the month? This is what you need to work smarter, not harder.</p>
<button className='border rounded-full mt-4 hover:bg-gray-400 text-sm pl-6 pr-6 pt-2 pb-2 font-semibold bg-gray-200'>Get to know More about timesheet approval</button>
</div>
<img className='h-60' src="https://cdn-m.timecamp.com/img/greenbranding/features/oneClickApprovals.png" alt="" />
</div>

<div className='flex justify-center m-auto mt-48 w-3/4 gap-8'>
<img className='' src="https://cdn-m.timecamp.com/img/greenbranding/features/attendance.png" alt="" />
<div className=''>
<p className='text-start text-sm text-blue-500'>
Attendance tracking</p>
<h1 className='text-start text-4xl font-bold text-gray-900 mt-4' >No more punch in/out cards</h1>
<p className='text-start text-sm mt-4'>TimeCamp also works for attendance reporting. You can finally scrap the dreaded punch in and out cards and use a simple tool.</p>
<button className='border rounded-full mt-4 hover:bg-gray-400 text-sm pl-6 pr-6 pt-2 pb-2 font-semibold bg-gray-200'>
 Read about easy attandance tracking</button>
</div>
</div>

<div className='flex justify-center m-auto mt-48 w-3/4 gap-8'>
<div className=''>
<p className='text-start text-sm text-blue-500'>
Easy invoicing</p>
<h1 className='text-start text-4xl font-bold text-gray-900 mt-4 w-3/5' >Effortless invoicing</h1>
<p className='text-start text-sm mt-4 w-72'>Turn precise data into precise invoices for your clients. No more disputes over amounts. TimeCamp provides the proof of work.</p>
<button className='border rounded-full mt-4 hover:bg-gray-400 text-sm pl-6 pr-6 pt-2 pb-2 font-semibold bg-gray-200'>Find out more about effortless invoicing</button>
</div>
<img className='h-60' src="https://cdn-m.timecamp.com/img/greenbranding/features/invoicing.png" alt="" />
</div>


<h1 className=' text-4xl font-bold text-gray-900 mt-20 text-center'>Customer story</h1>
<div className='flex w-3/4 m-auto  mt-12 border rounded-lg'>
  <img className='h-64' src="https://cdn-m.timecamp.com/img/customer-stories/saatchi/saatchi.jpg" alt="" />
<div className='mt-12'>
<p className='font-semibold text-start text-xl w-3/4 m-auto'>It’s very simple to use, especially fueling it with Trello, it’s key here, we wanted to maintain our workflow and not jump over
   to other pieces of software to capture the time data.</p>
<p className='text-start ml-24 font-thin text-sm'>Mike Spencer, M&C Saatchi</p>
</div>
</div>




<p className='text-center w-8/12 text-base m-auto mt-20'>Distribute the work on projects and tasks and  <span className='font-semibold'> track the progress </span> performed by your team. Bill your time on any particular tasks and make sure you will <span className='font-semibold'>never exceed your budget.</span> </p>
<div className='bg-gray-100'>
<div className='flex justify-center m-auto mt-48 w-3/4 gap-8 mb-8 pt-16 pb-16'>
<div className=''>
<p className='text-start text-sm text-green-500'>
Time tracking integrations</p>
<h1 className='text-start text-4xl font-bold text-gray-900 mt-4 w-10/12' >Easy and quick integration with more than 100 apps and work tools</h1>
<p className='text-start text-lg mt-4 w-10/12 font-normal'>TimeCamp works great alongside with all of the most popular work management tools.</p>
<br />
<p className='text-start text-lg mt-4 w-10/12 font-normal'>Now, you can also track time directly from your go-to apps such as Trello or Asana thanks to our Chrome extension.</p>
<button className='border flex rounded-full mt-4 hover:bg-gray-400 text-lg text-white pl-6 pr-6 pt-2 pb-2 font-semibold bg-blue-500'>
  <img className='h-12' src="https://cdn-m.timecamp.com/img/integrations/chrome.png" alt="" />
 <p className='mt-2 ml-4'> Track time in chrome</p></button>
<br />
<button className='border flex rounded-full mt-4 hover:bg-gray-400 text-lg text-white pl-6 pr-6 pt-2 pb-2 font-semibold bg-blue-500'>
  <img className='h-12' src="https://cdn-m.timecamp.com/img/integrations/edge.svg" alt="" />
 <p className='mt-2 ml-4'> Track time in Edge</p></button>

<p className='text-start text-lg mt-4 w-10/12 font-normal'>Maintain your current workflow and connect TimeCamp, the best time tracking software, with your currently used apps.</p>

<p className='mt-12 text-start text-lg text-green-500 cursor-pointer font-semibold'>Check integration -> </p>

</div>
<div >
  {/* <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png" alt="" />
  <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png" alt="" />
  <img src="https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png" alt="" />
  <img src="" alt="" />
  <img src="" alt="" />
  <img src="" alt="" />
  <img src="" alt="" />
  <img src="" alt="" /> */}

<div className='grid grid-cols-3 gap-12 ' >
{logo.map((item)=>(
  <div className='shadow-2xl p-6 rounded-3xl bg-white'>
  <img src={item.img} alt="" className='h-full'/>
  </div>
))}
</div>


</div>

</div>
</div>



<div className='mt-12 bg-gray-100 pt-4 pb-8 '>
<h1  className='text-4xl font-bold mt-12 mb-20 text-center'>You might be interested in these blog posts</h1>

<div className='flex gap-8 m-auto justify-center'>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm w-80">
    <a href="https://www.timecamp.com/customer-stories/saatchi" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg h-72" src="https://cdn-m.timecamp.com/img/customer-stories/saatchi/saatchi.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-blue-500 text-base font-medium mb-2 text-start">M&C SAATCHI</h5>
      <p class=" text-xl mb-4 font-bold text-start">
        How to Blend in TimeCamp to an Already established Workflow. Some Insighta from M&S Saatchi
      </p>
    </div>
  </div>
</div>


<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm w-80">
    <a href="https://www.timecamp.com/customer-stories/tense/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg h-72" src="https://cdn-m.timecamp.com/img/customer-stories/tense/tensegroup.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-blue-500 text-base font-medium mb-2 text-start">GRUPA TENSE</h5>
      <p class=" text-xl mb-4 font-bold text-start">
        How TimeCamp helped a thriving digital agency by auomating its workflow.
      </p>
    </div>
  </div>
</div>


<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm w-80">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg h-72" src="https://cdn-m.timecamp.com/img/greenbranding/features/timeTracking.png" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-blue-500 text-base font-medium mb-2 text-start uppercase">Time Tracking</h5>
      <p class=" text-xl mb-4 font-bold text-start capitalize">
        why you should use time tracking for your bussiness
      </p>
    </div>
  </div>
</div>

</div>
</div>


    </div>

  )
}

export default Features