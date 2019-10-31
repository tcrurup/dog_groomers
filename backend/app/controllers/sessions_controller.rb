class SessionsController < ApplicationController

    
    def new
        if logged_in?
            render json: current_user.to_json
        else
            render json: User.new.to_json
        end
    end

    private

    def session_params
        params.require(:session)
    end
end