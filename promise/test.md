## Testing Google Analytics

- Go to GA Dashboard
- Choose account number you want to test
  - Top left in drop down
  - Select NCSC
  - Select tracking number you want to test
    - UA-134461033-1 for prod environments
    - UA-134461033-2 for nonprod environments
    - UA-134461033-3 for development environments
  - Select All Data
- Navigate to Real Time under reports
- In the drop down navigate to Content
- Find ACD Hub under Page Title. If it doesnt exist, try triggering an event by navigating to 'Notifications' for example
- Click on it, This will apply a filter so you can see changes more clearly
- Change web-page state
- See if the event is reflected in the GA logs
- Check for all accounts
