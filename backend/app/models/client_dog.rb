class ClientDog < ActiveRecord::Base
    belongs_to :client
    belongs_to :dog
end