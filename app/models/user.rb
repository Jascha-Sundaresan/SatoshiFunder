class User < ActiveRecord::Base
  attr_reader :password
  validates :name, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 3, allow_nil: true }
  validates :name, uniqueness: true
  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(name, password)
    user = User.find_by_name(name)
    user.try(:is_password?, password) ? user : nil    
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  protected

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)    
  end

end
