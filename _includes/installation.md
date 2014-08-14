## Installation

Start by adding the Kilt gem to your Gemfile:

```ruby
  gem 'kilt-cms'
```

Then bundle your gems:

```ruby
  bundle install
```
            
Finally, in order to auto-load Kilt's dependencies, you must require Kilt in your application.rb:

```ruby
  module YourRailsApp
    class Application < Rails::Application
      require 'kilt' # just add this one line
      # the rest of your Application below...
    end
  end
```

You're done!
