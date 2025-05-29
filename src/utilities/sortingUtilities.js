export const sortTicket = (tickets, preference) => {
  switch (preference) {
    case "Alto a bajo":
      return [...tickets].sort((a, b) => b.priority.localCompare(a.priority));

    case "Bajo a alto":
      return [...tickets].sort((a, b) => a.priority.localCompare(b.priority));

    default:
      return tickets;
  }
};
