const data = [
  {
    id: 1,
    type: "service",
    name: "Service 1",
    active: true,
    memberId: 10,
  },
  {
    id: 2,
    type: "service",
    name: "Service 2",
    active: true,
    memberId: 11,
  },
  {
    id: 3,
    type: "service",
    name: "Service 3",
    active: false,
    memberId: 10,
  },
  {
    id: 4,
    type: "service",
    name: "Service 4",
    active: true,
    memberId: 9,
  },
  {
    id: 5,
    type: "deal",
    name: "Deal 1",
    active: false,
    services: [3, 4],
  },
  {
    id: 6,
    type: "deal",
    name: "Deal 6",
    active: false,
    services: [4],
  },
  {
    id: 7,
    type: "deal",
    name: "Deal 7",
    active: true,
    services: [1, 3, 4],
  },
  {
    id: 8,
    type: "member",
    name: "Member 1",
    active: true,
  },
  {
    id: 9,
    type: "member",
    name: "Member 2",
    active: true,
  },
  {
    id: 10,
    type: "member",
    name: "Member 3",
    active: true,
  },
  {
    id: 11,
    type: "member",
    name: "Member 4",
    active: false,
  },
];
let dataQuery = (data) => {
  let active = data.filter((elem) => elem.active === true);
  let activeNames = "";
  active.forEach((element) => {
    activeNames += element.name + ", ";
  });
  console.log(activeNames);
  let member3 = data.filter((elem) => elem.name === "Service 3");
  member3 = member3[0].memberId;
  let member3New = data.filter((elem) => elem.id === member3);
  member3New = member3New[0].name;
  console.log(member3New);
  let options = data.filter((elem) => elem.memberId === member3);
  let arr = [];
  options.forEach((elem) => {
    let newElem = Number(
      elem.name.substr(elem.name.length - 2, elem.name.length - 1)
    );
    arr.push(newElem);
  });
  let deals = data.filter((elem) => elem.services);
  let dealsStr = "";
  deals.forEach((elem) => {
    let dealsArr = elem.services;
    dealsArr = dealsArr.filter((elem) => arr.includes(elem));
    if (dealsArr.length !== 0) {
      dealsStr += elem.name + ", ";
    }
  });
  console.log(dealsStr);
  let services = data.filter((elem) => elem.type === "service");
  let servicesArr = [];
  services.forEach((elem) => {
    let newElem = Number(
      elem.name.substr(elem.name.length - 2, elem.name.length - 1)
    );
    servicesArr.push(newElem);
  });
  let noDeals = data.filter((elem) => elem.services);
  let prazanArr = [];
  noDeals.forEach((elem) => {
    let allServices = elem.services;
    let allServicesFiltered = servicesArr.filter((elem) =>
      allServices.includes(elem)
    );
    prazanArr.push(...allServicesFiltered);
  });
  noDeals = servicesArr.filter((elem) => !prazanArr.includes(elem));
  let newText = "";
  noDeals.forEach((elem) => {
    if (noDeals.length === 1) {
      newText += "Service " + elem;
    } else {
      newText += "Service " + elem + ", ";
    }
  });
  console.log(newText);
  let nonActive = data.filter(
    (elem) => elem.type === "member" && elem.active === false
  );
  return nonActive[0].name;
};
console.log(dataQuery(data));
// 1. "Service 1, Service 2, Service 4, Deal 7, Member 1, Member 2, Member 3"
// 2. "Member 3"
// 3. "Deal 1, Deal 7"
// 4. "Service 2"
// 5. "Member 4"
