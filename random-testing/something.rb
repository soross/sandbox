# starting something

class Something
  attr_accessor :name

  def initialize(name="")
    @name = name
    kyan_email
  end

  def kyan_email
    @kyanmail = nil
    @kyanmail = "#{@name.strip.downcase[/\w+/]}" + "@kyan.com" unless @name.nil?
    puts @kyanmail
  end

  def kyan_email?
    true unless @kyanmail.nil?
  end


end
