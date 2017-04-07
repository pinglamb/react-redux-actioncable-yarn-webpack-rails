class Message < ApplicationRecord
  after_create_commit { MessageRelayJob.perform_later(self) }
end
