import "./styles/App.css";
import { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function App() {
  const [isPreview, setIsPreview] = useState(false);
  const [sectionsSubmitted, setSectionsSubmitted] = useState({
    general: false,
    education: false,
    experience: false,
  });
  const [cvData, setCVData] = useState({
    general: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
    education: {
      school: "",
      degree: "",
      date: "",
    },
    experience: {
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      to: "",
    },
  });

  function handleFinalSubmit() {
    setIsPreview(true);
  }

  function handleEditCV() {
    setIsPreview(false);
  }

  return (
    <div className="App">
      {!isPreview ? (
        <>
          <h1>CV Builder</h1>
          <General
            data={cvData.general}
            setData={(data) =>
              setCVData((prev) => ({ ...prev, general: data }))
            }
            markSubmitted={(value) => setSectionsSubmitted(prev => ({ ...prev, general: value }))}
          />
          <Education
            data={cvData.education}
            setData={(data) =>
              setCVData((prev) => ({ ...prev, education: data }))
            }
            markSubmitted={(value) => setSectionsSubmitted(prev => ({ ...prev, education: value }))}
          />
          <Experience
            data={cvData.experience}
            setData={(data) =>
              setCVData((prev) => ({ ...prev, experience: data }))
            }
            markSubmitted={(value) => setSectionsSubmitted(prev => ({ ...prev, experience: value }))}
          />
          <button type="button" onClick={handleFinalSubmit}
            disabled={
              !sectionsSubmitted.general ||
              !sectionsSubmitted.education ||
              !sectionsSubmitted.experience
            }
          >
            Generate CV
          </button>
          {(!sectionsSubmitted.general || !sectionsSubmitted.education || !sectionsSubmitted.experience) && (
            <p className="warning">Please complete all sections before generating the CV.</p>
          )}
        </>
      ) : (
        <div>
          <h1>{cvData.general.fullName}</h1>
          <p>
            {cvData.general.email} | {cvData.general.phoneNumber}
          </p>

          <h2>Education</h2>
          <p>{cvData.education.school}</p>
          <p>{cvData.education.degree}</p>
          <p>{cvData.education.date}</p>

          <h2>Experience</h2>
          <p>{cvData.experience.company}</p>
          <p>{cvData.experience.position}</p>
          <p>{cvData.experience.responsibilities}</p>
          <p>
            {cvData.experience.from} - {cvData.experience.to}
          </p>

          <button onClick={handleEditCV}>Edit CV</button>
        </div>
      )}
    </div>
  );
}
