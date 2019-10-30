class ClientsController < ApplicationController

    def new
        render json: User.new.to_json
    end
end