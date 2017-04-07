class Message < ApplicationRecord
  after_commit { MessageRelayJob.perform_later(self) }
end
