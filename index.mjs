/* global fetch */
/* global Headers */
export const handler = (event) => {
  
  const r = JSON.parse(event.Records[0].body)

    
    console.log('Stream record: ', JSON.stringify(r, null, 2));

    const year = new Date().getFullYear() 

    if (r.dynamodb.NewImage.DuesYear.N >= year) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization", process.env.BEARER
    );
  
    const raw = JSON.stringify({
      email: r.dynamodb.NewImage.EmailPrimaryAddress.S,
      status: "active",
      fields: {
        name: r.dynamodb.NewImage.FirstName.S,
        last_name: r.dynamodb.NewImage.LastName.S,
        country: "United States of America",
        city: r.dynamodb.NewImage.AddressPrimaryCity.S,
        phone: r.dynamodb.NewImage.PhonePrimaryNumber.S,
        state: r.dynamodb.NewImage.AddressPrimaryState.S,
        z_i_p: r.dynamodb.NewImage.AddressPrimaryZipCode.S,
        bsa_id: r.dynamodb.NewImage.BsaPersonId.N,
        dues_year: r.dynamodb.NewImage.DuesYear.N,
        position: r.dynamodb.NewImage.Positions.S,
        street_1: r.dynamodb.NewImage.AddressPrimaryStreet1.S,
        street_2: r.dynamodb.NewImage.AddressPrimaryStreet2.S,
        chapter: r.dynamodb.NewImage.Chapter.S,
        level: r.dynamodb.NewImage.Level.S,
        date_of_birth: r.dynamodb.NewImage.DateOfBirth.S,
        election_date: r.dynamodb.NewImage.ElectionDate.S,
        ya: r.dynamodb.NewImage.YouthAdult.S,
        bsa_reg: r.dynamodb.NewImage.BsaLastCheckStatus.S,
        ypt_compliant: r.dynamodb.NewImage.YouthProtectionCompliant.BOOL,
        committee: r.dynamodb.NewImage.PositionLec.BOOL,
        bro_date: r.dynamodb.NewImage.BrotherhoodDate.S,
        ordeal_date: r.dynamodb.NewImage.OrdealDate.S,
        brot_eligible_date: r.dynamodb.NewImage.BrotherhoodEligibleDate.S,
        unit: r.dynamodb.NewImage.Unit.S,
        vigil_date: r.dynamodb.NewImage.VigilInductionDate.S,
      },
      groups: [
          "105106937266308673"
      ]
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("https://connect.mailerlite.com/api/subscribers", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  } else {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization", process.env.BEARER
    );
  
    const raw = JSON.stringify({
      email: r.dynamodb.NewImage.EmailPrimaryAddress.S,
      status: "active",
      fields: {
        name: r.dynamodb.NewImage.FirstName.S,
        last_name: r.dynamodb.NewImage.LastName.S,
        country: "United States of America",
        city: r.dynamodb.NewImage.AddressPrimaryCity.S,
        phone: r.dynamodb.NewImage.PhonePrimaryNumber.S,
        state: r.dynamodb.NewImage.AddressPrimaryState.S,
        z_i_p: r.dynamodb.NewImage.AddressPrimaryZipCode.S,
        bsa_id: r.dynamodb.NewImage.BsaPersonId.N,
        dues_year: r.dynamodb.NewImage.DuesYear.N,
        position: r.dynamodb.NewImage.Positions.S,
        street_1: r.dynamodb.NewImage.AddressPrimaryStreet1.S,
        street_2: r.dynamodb.NewImage.AddressPrimaryStreet2.S,
        chapter: r.dynamodb.NewImage.Chapter.S,
        level: r.dynamodb.NewImage.Level.S,
        date_of_birth: r.dynamodb.NewImage.DateOfBirth.S,
        election_date: r.dynamodb.NewImage.ElectionDate.S,
        ya: r.dynamodb.NewImage.YouthAdult.S,
        bsa_reg: r.dynamodb.NewImage.BsaLastCheckStatus.S,
        ypt_compliant: r.dynamodb.NewImage.YouthProtectionCompliant.BOOL,
        committee: r.dynamodb.NewImage.PositionLec.BOOL,
        bro_date: r.dynamodb.NewImage.BrotherhoodDate.S,
        ordeal_date: r.dynamodb.NewImage.OrdealDate.S,
        brot_eligible_date: r.dynamodb.NewImage.BrotherhoodEligibleDate.S,
        unit: r.dynamodb.NewImage.Unit.S,
        vigil_date: r.dynamodb.NewImage.VigilInductionDate.S,
      },
      groups: [
          "128870101421131762"
      ]
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("https://connect.mailerlite.com/api/subscribers", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  
  if (r.dynamodb.NewImage.EmailParentAddress.S && r.dynamodb.NewImage.DuesYear.N >= year) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization", process.env.BEARER
    );
  
    const raw = JSON.stringify({
      email: r.dynamodb.NewImage.EmailParentAddress.S,
      status: "active",
      fields: {
        child_bsa_number: r.dynamodb.NewImage.BsaPersonId.N,
        dues_year: r.dynamodb.NewImage.DuesYear.N,
      },
      groups: [
          "128870739743868209"
      ]
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("https://connect.mailerlite.com/api/subscribers", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  if (r.dynamodb.NewImage.CustomEmailParent2Address.S && r.dynamodb.NewImage.DuesYear.N >= year) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization", process.env.BEARER
    );
  
    const raw = JSON.stringify({
      email: r.dynamodb.NewImage.CustomEmailParent2Address.S,
      status: "active",
      fields: {
        child_bsa_number: r.dynamodb.NewImage.BsaPersonId.N,
        dues_year: r.dynamodb.NewImage.DuesYear.N,
      },
      groups: [
          "128870739743868209"
      ]
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("https://connect.mailerlite.com/api/subscribers", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  

  const response = {
    statusCode: 200,
  };
  return response;
};
