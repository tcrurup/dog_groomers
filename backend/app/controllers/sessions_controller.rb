class SessionsController < ApplicationController

    
    def new
        if logged_in?
            render json: current_user.to_json
        else
            render json: User.new.to_json
        end
    end

    def create
        user = User.find_by(username: session_params[:username])
        puts user
        if user
            if(user.authenticate(session_params[:password]))
                session[:user_id] = user.id
                render json: user.to_json
            else
                raise "Password is incorrect"
            end 
        else
            raise "No user with that username found"
        end
    end

    private

    def session_params
        params.require(:session).permit(:username, :password)
    end
end