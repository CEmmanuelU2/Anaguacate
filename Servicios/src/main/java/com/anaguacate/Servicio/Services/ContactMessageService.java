@Service
public class ContactMessageService {
    @Autowired
    private ContactMessageRepository repository;

    public ContactMessage save(ContactMessage message) {
        return repository.save(message);
    }
}