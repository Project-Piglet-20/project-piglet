const initState = {
  category: [],
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_DROPDOWN":
      console.log("dropdown added", action.issue);
      return state;
    case "ADD_DROPDOWN_ERROR":
      console.log("add dropdown error", action.err);
      return state;
    default:
      return state;
  }
};

export default categoryReducer;

// category: [
//   {
//     value: "Fallen tree on road (Civil)",
//     label: "Fallen tree on road (civil)",
//     id: "tree",
//     "data-icon": "images/sample-1.jpg",
//   },
//   { value: "Tree about to fall", label: "Tree about to fall", id: "tree" },
//   {
//     value: "Tree interfering with wires",
//     label: "Tree interfering with wires",
//     id: "tree",
//   },
//   {
//     value: "Road in bad condition(Potholes,Chipping etc)",
//     label: "Road in bad condition(Potholes,Chipping etc)",
//     id: "road",
//   },
//   {
//     value: "Water logging/flooding on the roads",
//     label: "Water logging/flooding on the roads",
//     id: "road",
//   },
//   {
//     value: "Anti-social elements gathered on the road",
//     label: "Anti-social elements gathered on the road",
//     id: "road",
//   },
//   {
//     value: "Illegal hoardings blocking the road",
//     label: "Illegal hoardings blocking the road",
//     id: "road",
//   },
//   {
//     value: "Fallen streetlamp poles",
//     label: "Fallen streetlamp poles",
//     id: "lighting",
//   },
//   {
//     value: "Streetlamps not working",
//     label: "Streetlamps not working",
//     id: "lighting",
//   },
//   {
//     value: "New Streetlamps required",
//     label: "New Streetlamps required",
//     id: "lighting",
//   },
//   { value: "Other", label: "Other", id: "other" },
//   { value: null, label: null, id: null },
// ],
