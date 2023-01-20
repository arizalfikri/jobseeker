export default function About() {
  return (
    <div className="text-center">
      <div className="container mt-10 flex flex-column">
        <h1>
          Powered by <br /> Applicant Tracking System
        </h1>
        <p className="mt-5">
          Applicant Tracking System or ATS is software that streamlines and
          automates the end-to-end recruitment process for an employer or
          recruiter <br /> from source to hire. 99% of Fortune 500 companies use
          ATS to make their hiring process faster, cheaper and more effective
        </p>
        <button className="btn-base mt-4 py-2 fw-bold px-4">Get Started</button>
      </div>
      <div className="w-full gradient my-6">
        <h1 className="ln-100">Ready to build your own job portal?</h1>
        <button className="btn-base mt-4 py-2 fw-bold px-4">Get Started</button>
      </div>
    </div>
  );
}
