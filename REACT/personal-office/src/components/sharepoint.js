import { Get, Person } from "@microsoft/mgt-react";

const Riga = (props) => {
  const row = props.dataContext;

  return (
    <>
    <div class="minicontenitore">
        <a href={row.webUrl} target="_blank" rel="noreferrer" class="title_item">
          <i class="fas fa-link"></i> {row.fields.LinkFilename}
        </a>
      <div class="detail_item">
        <span>
          <Person personQuery={row.createdBy.user.email} view="oneline" personCard="hover"></Person>
        </span>
        <span>{row.webUrl}</span>
      </div>
      </div>
      {/* <pre>{JSON.stringify(email, null, 2)}</pre> */}
    </>
  );
};

export default function Sharepoint() {
  return (
    <Get
      resource="/sites/giunecosrl.sharepoint.com,e7f5da71-7f68-4413-ae80-3eee876a0781,61cbb0d6-773f-4d8d-8622-bec29c89f24e/lists/9a7f596e-1446-4779-8a9e-e2c4076fdd9d/items?expand=fields"
      version="beta"
    >
      <Riga template="value"></Riga>
    </Get>
  );
}
