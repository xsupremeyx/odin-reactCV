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
            markSubmitted={(value) =>
              setSectionsSubmitted((prev) => ({ ...prev, general: value }))
            }
          />
          <Education
            data={cvData.education}
            setData={(data) =>
              setCVData((prev) => ({ ...prev, education: data }))
            }
            markSubmitted={(value) =>
              setSectionsSubmitted((prev) => ({ ...prev, education: value }))
            }
          />
          <Experience
            data={cvData.experience}
            setData={(data) =>
              setCVData((prev) => ({ ...prev, experience: data }))
            }
            markSubmitted={(value) =>
              setSectionsSubmitted((prev) => ({ ...prev, experience: value }))
            }
          />
          <button
            type="button"
            onClick={handleFinalSubmit}
            disabled={
              !sectionsSubmitted.general ||
              !sectionsSubmitted.education ||
              !sectionsSubmitted.experience
            }
          >
            Generate CV
          </button>
          {(!sectionsSubmitted.general ||
            !sectionsSubmitted.education ||
            !sectionsSubmitted.experience) && (
            <p className="warning">
              Please complete all sections before generating the CV.
            </p>
          )}
        </>
      ) : (
        <div className="cv-preview">
          {/* Header */}
          <div className="cv-preview__header">
            <h1>{cvData.general.fullName}</h1>
            <p className="cv-preview__contact">
              {cvData.general.email} · {cvData.general.phoneNumber}
            </p>
          </div>

          {/* Education */}
          <h2>Education</h2>
          <div className="cv-preview__entry">
            <div className="cv-preview__entry-main">
              <span className="cv-preview__school">
                {cvData.education.school}
              </span>
              <span className="cv-preview__degree">
                {cvData.education.degree}
              </span>
            </div>
            <span className="cv-preview__date">{cvData.education.date}</span>
          </div>

          {/* Experience */}
          <h2>Experience</h2>
          <div className="cv-preview__entry">
            <div className="cv-preview__entry-main">
              <span className="cv-preview__company">
                {cvData.experience.company}
              </span>
              <span className="cv-preview__position">
                {cvData.experience.position}
              </span>
              <p className="cv-preview__responsibilities">
                {cvData.experience.responsibilities}
              </p>
            </div>
            <span className="cv-preview__date">
              {cvData.experience.from} — {cvData.experience.to}
            </span>
          </div>

          <div className="cv-preview__actions">
            <button onClick={handleEditCV}>Edit CV</button>
          </div>
        </div>
      )}
    </div>
  );
}
