class ClientsController < ApplicationController

    def new
        render json: User.new.to_json
    end

    def create
        @client = Client.new.tap do |u|
            u.username = client_params[:username]
            u.first_name = client_params[:first_name]
            u.last_name = client_params[:last_name]
            u.password = client_params[:password_digest]
        end
        @client.save
        render json: @client.to_json
    end

    private

    def client_params
        params.require(:client).permit(:username, :first_name, :last_name, :password_digest)
    end
end