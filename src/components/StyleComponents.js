import styled from "styled-components";

// QuestionCard Component
export const Card = styled.div`
  width: 60%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2%;
  -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            box-shadow: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
              box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      }
    }
 @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 510px) {
    width: 90%;
  }
  @media (max-width: 428px) {
    width: 92%;
  }
`;
// Question Component
export const Container = styled.div`
  font-size: 18px;
`;
export const QuestionNumber = styled.h2`
  font-weight: bold;
  margin: 2% 0 0 0;
`;
export const Content = styled.div`
  position: relative;
  top: 10px;
  @media (max-width: 500px) {
    top: 0;
  }
`;
export const QuestionText = styled.p`
  text-align: left;
  margin-top: 1%;
  @media (max-width: 428px) {
    font-size: 17px;
  }
`;
export const QuestionCategory = styled.p`
  font-size: 13px;
  color: grey;
  margin: 0;
`;

// TopProgreesBar
export const ProgressBar = styled.div`
  margin-top: -1%;
`;
// Question Difficulty
export const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;
// Answer Component
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 3% auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;
export const StyledButton = styled.button`
  padding: 1% 3%;
  width: 47%;
  margin: 5px;
  @media (max-width: 500px) {
    width: 75%;
    margin: 2px;
  }
  @media (max-width: 428px) {
    font-size: 17px;
    width: 85%;
  }
`;
export const AnswerDiv = styled.div`
  height: 3px;
  position: relative;
  bottom: 10px;

  @media (max-width: 500px) {
    margin: 3% 0 2% 0;
  }
  @media (max-width: 400px) {
    margin: 6% 0 8% 0;
  }
`;
export const Answer = styled.h2`
  font-weight: bold;
  text-align: center;
`;
export const NextQuestion = styled.button`
  margin: 0 auto;
  margin-top: 5%;
  padding: 0.8% 3%;
  display: flex;
  @media (max-width: 992px) {
    margin-top: 7%;
  }
  @media (max-width: 768px) {
    margin-top: 5%;
  }
  @media (max-width: 650px) {
    margin-top: 6%;
  }
`;
// Bottom Progress Bar
export const CorrectAnswerPercentage = styled.div`
  position: relative;
  top: 10px;
`;
export const MaxScore = styled.div`
  position: relative;
  top: 10px;
`;
export const BottomBar = styled.div`
  margin: 0;
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
export const PercentageText = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Progress = styled.div`
  margin: 2px 0;
`;
