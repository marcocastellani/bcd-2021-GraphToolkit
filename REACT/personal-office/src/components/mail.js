import { Get, Person } from "@microsoft/mgt-react";

const Riga = (props) => {
  const email = props.dataContext;

  return (
    <>
      <div>
        <span>
          <Person personQuery={email.sender.emailAddress.address} view="oneline" personCard="hover"></Person>
        </span>
        <h3>{email.subject}</h3>
      </div>

      <div>{email.bodyPreview}</div>

      {/* <pre>{JSON.stringify(email, null, 2)}</pre> */}
    </>
  );
};

export default function Mail() {
  return (
    <Get resource="/me/messages" version="beta">
      <Riga template="value"></Riga>
    </Get>
  );
}
