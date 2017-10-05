class Game
  def method_missing(name, *args)
    person = name.to_s.capitalize
    3.times do
      number = rand(10) + 1
      p "#{number}"
    end
    "#{person} number is #{number}"
  end

  def respond_to_missing?(method_name, include_private = false)
    true || super
  end
end
