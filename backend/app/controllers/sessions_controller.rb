class SessionsController < ApplicationController

    def create
        @user = User.find_by(id: params[:id])
        session[:user_id] = @user.id
        render json: @user.to_json
    end
    
    def new
        if logged_in?
            render json: current_user.to_json
        else
            render json: User.new.to_json
        end
    end
end