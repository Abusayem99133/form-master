import "./App.css";
import Grandpa from "./Grandpa/Grandpa";
// import HookForm from "./Components/HookForm";
// import ReuseableForm from "./Components/ReuseableForm";
// import RefForm from "./Components/RefForm";
// import SimpleForm from "./Components/SimpleForm";
// import StateFullForm from "./Components/StateFullForm";

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("sign up data", data);
  //   // e.preventDefault();
  // };
  // const handleUpdateProfile = (data) => {
  //   // e.preventDefault();
  //   console.log("update profile", data);
  // };
  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sign Up"} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep up updated</p>
        </div>
      </ReuseableForm> */}
    </>
  );
}

export default App;
