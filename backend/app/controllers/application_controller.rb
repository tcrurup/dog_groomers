class ApplicationController < ActionController::API
    
    def current_user
        User.find_by(id: session[:user_id])
    end

    private 

    def logged_in?
        !!current_user
    end

end
