import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App/App";
import Notifications from "./Notifications";

describe("Notification Component", () => {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
    },
  ];

  // Test if displayDrawer is called on Menu click
  it("Menu Click calls handleDisplayDrawer", async () => {


    // Spy on handleDisplayDrawer
    const handleDisplaySpy = jest.spyOn(App.prototype, "handleDisplayDrawer") 

    render(<Notifications notifications={notificationsList} isDrawerDisplayed={false}/>);

    // Get Menu button
    const menuButton = screen.getByTestId(/displayBtn/i);

    // Simulate button click
    await userEvent.click(menuButton);

    // Assert if handleDisplay gets called
    expect(handleDisplaySpy).toHaveBeenCalled();
  })

});
