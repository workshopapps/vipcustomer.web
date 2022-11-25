import React, { useEffect, useState } from "react";
import styling from "./demo.module.css";
import checkmark from "./assets/checkmark.png";
import Loading from "./Loading";
import Results from "./Results";

const BASE_URL = new URL("http://54.164.135.3/api/search/");

const Demo = () => {
  const { grid_container } = styling;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [career, setCareer] = useState("");
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(
    "Please wait, we are processing your request."
  );
  const [showResult, setShowResult] = useState(false);
  let data;

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const name = firstName + " " + lastName;
      BASE_URL.searchParams.append("name", name);
      gender && BASE_URL.searchParams.append("gender", gender);
      career && BASE_URL.searchParams.append("occupation", career);
      age && BASE_URL.searchParams.append("age", age);
      email && BASE_URL.searchParams.append("email", email);
      const res = await fetch(BASE_URL.toString());
      // const res = await fetch(
      //   `http://18.212.30.183:8000/api/search/?name=${name}&gender=${gender}&occupation=${career}&age=${age}&email=${email}`
      // );
      data = await res.json()[0];
      console.log(data);
      setLoadingText("All done!");
      setTimeout(() => {
        setIsLoading(false);
        setShowResult(true);
      }, 1000);
    } catch (e) {
      setIsLoading(true);
      setLoadingText("An error occured, Please try again later");
    }
  }

  useEffect(() => {
    return () => {
      setShowResult(false);
    };
  }, []);

  return (
    <main>
      {isLoading && <Loading text={loadingText} />}
      {showResult && <Results name="Elon Dough" gender="male" />}
      {!isLoading && (
        <section className={grid_container}>
          <div>
            <h1>
              Live Demo of <strong> Axe API VIP </strong> recognition software
            </h1>
          </div>
          <div>
            <article>
              <h2>Try Out A Live Demo</h2>
              <p>
                Fill in the information below with a VIP’s details and hit
                analyze or choose Advanced options to customize the
                identification process
              </p>
              <form onSubmit={handleSubmit}>
                <label>
                  FirstName <span>*</span>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label>
                  LastName <span>*</span>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
                <label>
                  Email
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  Gender
                  <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
                <label>
                  Career/Industry
                  <input
                    type="text"
                    value={career}
                    onChange={(e) => setCareer(e.target.value)}
                  />
                </label>
                <label>
                  Age
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>
                <article>
                  <button type="submit">Analyse</button>
                  <span>Advanced options</span>
                </article>
              </form>
            </article>
          </div>
          <div>
            <h2>
              See why companies trust AXE API to identify high profile
              personalities, gain their loyalty, and encourage customer
              retention.
            </h2>
            <p>
              Try out Axe API with any VIP’s information and see how it performs{" "}
            </p>
            <ul>
              <li>
                <img src={checkmark} />
                Automatic VIP level tagging and categorization with relevant
                keyword extraction
              </li>
              <li>
                <img src={checkmark} />
                Real-time data collection so that you can make decisions on how
                to improve high ranking customer satisfaction levels.
              </li>
              <li>
                <img src={checkmark} />
                Automatic customer profiling methods and processes so teams can
                focus on what matters the most
              </li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
};
export default Demo;
